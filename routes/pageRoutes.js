const express = require('express');
const router = express.Router();
const controller = require('../controllers/pageController.js');

router.get("/", controller.home);

router.get("/menu", controller.menu)

router.get("/about", controller.about)

router.get("/login", controller.login)

// router.use(function(req, res) {
//     res.status(404);
//     res.type('text/plain');
//     res.send('404 Not Found');
// })

// router.use(function(err, req, res, next) {
//     res.status(500);
//     res.type('text/plain');
//     res.send('Internal Server Error');
// })

module.exports = router;