const Dish = require("../Models/DishModel")

exports.staffDashboard = async (req, res) => {
    const css = [
        { url: '/css/style.css' },
    ];

    const bootstrap = [
        { url: 'css/bootstrap.min.css' },
    ];


    const js = [
        {url: '/js/main.js'},
    ];

    const menu = await Dish.getMenu();

    res.render('staff/home', {pageTitle: 'Spice King - Staff Home', css, bootstrap, js, menu});
}

exports.addDish = function(req, res) {
    const css = [
        { url: 'css/style.css' },
    ];

    const bootstrap = [
        { url: 'css/bootstrap.min.css' },
    ];


    const js = [
        {url: 'js/main.js'},
    ];

    res.render('staff/addDish', {pageTitle: 'Spice King - Add Dish', css: css, js: js, bootstrap: bootstrap});
}

exports.editDish = async (req, res) => {
    const dishTypes = [
        { value: 'drink', text: 'Drink'},
        { value: 'starter', text: 'Starter'},
        { value: 'main', text: 'Main'},
        { value: 'alcohol', text: 'Alcohol'},
    ]

    const css = [
        { url: 'css/style.css' },
    ];

    const bootstrap = [
        { url: 'css/bootstrap.min.css' },
    ];


    const js = [
        {url: 'js/main.js'},
    ];

    const dish = await Dish.findOne({_id: req.params.id});

    dish.ingredients = dish.ingredients.join(', ');

    dishTypes.forEach(type => {
        if (dish.type === type.value) {
            type.selected = true
        }
    })

    res.render('staff/editDish', { pageTitle: 'Spice King: Edit Dish', css, js, bootstrap, dish, dishTypes});
} 

exports.addDishPost = async (req, res) => {
    let {
        unique_id, name, description, ingredients, allergy_info, price, type, vegan, vegetarian, hidden
    } = req.body

    if (vegan == 'on') {
        vegetarian == 'on';
    }

    const ingredients_seperated = ingredients.replace(/\s/g, '').split(',');

    await Dish.populateMenu({id: unique_id,
        name: name,
        description: description,
        ingredients: ingredients_seperated,
        allergyInfo: allergy_info,
        type: type,
        price: price,
        hidden: hidden === 'is_on' ? true : false,
        vegetarian: vegetarian === 'is_on' ? true : false,
        vegan: vegan === 'is_on' ? true : false})

    console.log(name + ' added  to the DB');
    res.redirect("staffDashboard");
    console.log(Dish.getDishById("macaroni"));
}

exports.editDishPost = async (req, res) => {
    let {
        unique_id, name, description, ingredients, allergy_info, price, type, vegan, vegetarian, hidden
    } = req.body

    if (vegan == 'on') {
        vegetarian == 'on';
    }

    const ingredients_seperated = ingredients.replace(/\s/g, '').split(',');

    await Dish.update(
        { _id: req.params.id },
        { $set: {
            id: unique_id,
            name: name,
            description: description,
            ingredients: ingredients_seperated,
            allergyInfo: allergy_info,
            type: type,
            price: price,
            hidden: hidden === 'is_on' ? true : false,
            vegetarian: vegetarian === 'is_on' ? true : false,
            vegan: vegan === 'is_on' ? true : false
        } },
        {},
    )

    console.log('Dish: ' + req.params.id + ' updated successfully.');
    res.redirect("/staffDashboard");
}

exports.deleteDishPost = async(req, res) => {
    await Dish.remove({_id: req.params.id}, {});
    console.log('Dish: ' + req.params.id + ' removed from DB!');
    res.redirect("/staffDashboard");
}