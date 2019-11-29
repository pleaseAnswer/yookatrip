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
//查询list数据库
Router.get('/list', async (req, res) => {
    //查询数据库
    let result = await find('list'); //得到一个promise对象
    res.send(formatData({
        data: result
    }))
})
//查询单个用户信息
Router.get('/:id', async (req, res) => {
    let {
        id
    } = req.params;
    //查询数据库
    let result = await find('list', {
        _id: id
    }, {
        fields: {
            password: false
        }
    }); //fields过滤某字符，这里表示password不显示出来
    res.send(formatData({
        data: result
    }))
})
module.exports = Router;