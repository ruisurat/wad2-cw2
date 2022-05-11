const Dish = require('../models/DishModel');
const db = new Dish();

// db.init();

exports.home = function(req, res) {
    const css = [
        { url: '/css/style.css' },
    ];

    const bootstrap = [
        { url: 'css/bootstrap.min.css' },
    ];


    const js = [
        {url: '/js/main.js'},
    ];

    res.render('home', {pageTitle: 'Spice King - Home', css: css, js: js, bootstrap: bootstrap});

    console.log("home loaded")
}

exports.about = function(req, res) {
    const css = [
        { url: '/css/style.css' },
    ];

    const bootstrap = [
        { url: 'css/bootstrap.min.css' },
    ];


    const js = [
        {url: '/js/main.js'},
    ];

    res.render('about', {pageTitle: 'Spice King - About', css: css, js: js, bootstrap: bootstrap});

    console.log("about loaded")
}

exports.menu = async (req, res) => {
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

    res.render('menu', {pageTitle: 'Spice King - Menu', css, bootstrap, js, menu});
}

exports.login = async (req, res) => {
    const accessToken = req.cookies.jwt;
    const css = [
        { url: '/css/style.css' },
    ];

    const bootstrap = [
        { url: 'css/bootstrap.min.css' },
    ];


    const js = [
        {url: '/js/main.js'},
    ];

    try {
        await jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        return res.redirect('/about');
      }
      catch (err) {
        return res.render('login', { pageTitle: 'Spice King - Login', css, bootstrap, js });
      }
}