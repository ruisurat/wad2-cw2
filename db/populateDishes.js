const Dish = require('../models/DishModel');

const dishes = [

    // drinks
    {
        id: 'coke',
        name: 'Coke',
        description: 'Mmmmmm',
        ingredients: ['Coke', 'Ice'],
        allergyInfo: '',
        type: 'drink',
        price: '1.50',
        hidden: false,
        vegetarian: true,
        vegan: true,
    },

    // starters
    {
        id: 'chips',
        name: 'Chips',
        description: 'Good with tomato ketchup',
        ingredients: ['Potatoes', 'Salt'],
        allergyInfo: '',
        type: 'starter',
        price: '3.50',
        hidden: false,
        vegetarian: false,
        vegan: false,
    },

    // mains
    {
        id: 'lasagna',
        name: 'Lasagna',
        description: 'Garfield enjoys this',
        ingredients: ['Meat Sauce', 'Lasagna Noodles', 'Ricotta Cheese', 'Mozzarella Cheese'],
        allergyInfo: 'Contains dairy',
        type: 'main',
        price: '10.50',
        hidden: false,
        vegetarian: false,
        vegan: false,
    },

    {
        id: 'pizza',
        name: 'Pizza',
        description: 'Great with garlic bread!',
        ingredients: ['Bread', 'Cheese', 'Tomatoes'],
        allergyInfo: '',
        type: 'main',
        price: '10.50',
        hidden: false,
        vegetarian: false,
        vegan: false,
    },

    // alcohol
    {
        id: 'rum_and_coke',
        name: 'Rum & Coke',
        description: 'Gets you tipsy',
        ingredients: ['Rum', 'Coke'],
        allergyInfo: '',
        type: 'alcohol',
        price: '10.50',
        hidden: false,
        vegetarian: true,
        vegan: true,
    },
    
]

dishes.forEach(dish => {
    Dish.populateMenu(dish);
})