var pythonModel = require('../model/python.model');

module.exports = {
    grade_prediction: function (req, res) {
        pythonModel.return_prediction().then((result) => {
            res.send(result); // 成功回傳result結果
        }).catch((err) => {
            return res.send(err);
        }); // 失敗回傳錯誤訊息
    }
};
