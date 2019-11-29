const express = require('express');

const Router = express.Router();
//引入数据库操作方式
const {
    find
} = require('../db/mongodb')
const {
    formatData
} = require('../utils')


//查询数据库
Router.get('/shouye', async (req, res) => {
    //查询数据库
    let result = await find('shouye'); //得到一个promise对象
    res.send(formatData({
        data: result
    }))
})

//查询数据库
Router.get('/activity', async (req, res) => {
    //查询数据库
    let result = await find('activity'); //得到一个promise对象
    res.send(formatData({
        data: result
    }))
})

//查询数据库
Router.get('/activity/:id', async (req, res) => {
    //查询数据库
    let id = req.params.id;
    let result = await find('activity',{_id:id}); //得到一个promise对象
    res.send(formatData({
        data: result
    }))
})

Router.get('/xiangqing', async (req, res) => {
    //查询数据库
    let result = await find('xiangqing'); //得到一个promise对象
    res.send(formatData({
        data: result
    }))
})
module.exports = Router;