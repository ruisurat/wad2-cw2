const express = require('express');
const router = express.Router();
const controller = require("../controllers/staffPageController");
const {verify} = require("../controllers/authenticationController")

router.get('/staffDashboard', verify, controller.staffDashboard);
router.get('/addDish', verify, controller.addDish);
router.get('/editDish/:id', verify, controller.editDish);

router.post('/addDish', verify, controller.addDishPost);
router.post('/editDish/:id', verify, controller.editDishPost);
router.post('/deleteDish/:id', verify, controller.deleteDishPost);

module.exports = router;