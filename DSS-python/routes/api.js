var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var cors = require('cors');

router.use(cors());

import pythonController from '../controller/pythonController'

/* GET APIs listing. */
router.get('/', function (req, res) {
    res.send('mainpage of APIs');
});

// run python script
// router.route('/POST/predict').post(pythonController);

// test
router.route('/GET/prediction').get(pythonController.grade_prediction);

module.exports = router;
