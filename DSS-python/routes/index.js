var express = require('express');
var router = express.Router();


/* GET home page. */
//default setting when install express
router.get('/', function (req, res, next) {
    //跟laravel一樣把資料傳去view 再顯示
    res.render('index', {title: 'Express'});
});

module.exports = router;
