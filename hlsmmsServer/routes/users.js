var express = require('express');
var router = express.Router();

//引入mssql模块
const mysql = require('mysql');

//数据库连接配置（创建数据库连接）
const conn = mysql.createConnection({
  host: 'localhost', //数据库主机名
  user: 'root',         //数据库账号
  password: 'root',    //密码
  database: 'hlsmms'      //使用哪个数据库
});

//打开数据库链接
conn.connect(err => {
  if (err) {
    console.log("× 数据库链接失败！", err.message);
  }
  else {
    console.log("√ 数据库链接成功！");
  }
});


//添加用户的路由
router.post("/useradd", (req, res) => {

  res.header("Access-Control-Allow-Origin", "*");
  let { username, pass, usergroup } = req.body;

  //三个问号表示占位符，后期使用参数数组替换
  let sqlStr = "insert into userinfo(username,userpwd,usergroup) values(?,?,?)";
  let sqlParmas = [username, pass, usergroup];

  //执行sql语句
  conn.query(sqlStr, sqlParmas, (err, result) => {
    //错误处理
    if (err) {
      throw err;
    }
    else {
      //执行的结果
      console.log(result);

      //根据执行的结果返回数据给前端
      if (result.affectedRows > 0) {
        res.json({ "isOk": true, "code": 1, "msg": "用户添加成功！" });
      }
      else {
        res.json({ "isOk": false, "code": -1, "msg": "用户添加失败！" });
      }
    }
  });

});

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('路由通了');
});

module.exports = router;
