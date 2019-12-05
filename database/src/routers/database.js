const express = require('express');

const Router = express.Router();
//引入数据库操作方式
const {
    find,create,remove,update

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

// 相册
Router.get('/photo', async (req, res) => {
    //查询数据库
    let result = await find('photolist'); //得到一个promise对象
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
    let result = await find('activity', {
        _id: id
    }); //得到一个promise对象
    res.send(formatData({
        data: result
    }))
})

Router.post('/cart', async (req, res) => {
    let {
        id,
        title,
        coverPicUrl,
        startTime,
        endTime,
        priceMin,
        num
    } = req.body;
    await create('cart',{
        id,
        title,
        coverPicUrl,
        startTime,
        endTime,
        priceMin,
        num
    }); 
    if(result.insertedCount>0){
        res.send(formatData());
    }else{
        res.send(formatData({status:0}));
    }
})

Router.get('/xiangqing', async (req, res) => {
    //查询数据库
    let result = await find('xiangqing'); //得到一个promise对象
    res.send(formatData({
        data: result
    }))
})

Router.get('/cart', async (req, res) => {
    let result = await find('cart'); //得到一个promise对象
    
    res.send(formatData({
        data: result
    }))
})

Router.patch('/cart/:id', async (req, res) => {
    let {id} = req.params;
    let {num} = req.body;
    let result = await update('cart',{
        id
    },{
        num
    }); 
    if (result.modifiedCount > 0) {
        res.send(formatData())
    } else {
        res.send(formatData({
            status: 0
        }))
    }
})
Router.delete('/cart/:id', async (req, res) => {
    let {id} = req.params;
    
    let result = await remove('cart',{
        _id:id
    }); 
    if (result.modifiedCount > 0) {
        res.send(formatData())
    } else {
        res.send(formatData({
            status: 0
        }))
    }
})


//查询单个用户信息
Router.get('/guide/:id', async (req, res) => {
    let {
        id
    } = req.params;
    //查询数据库
    let result = await find('list', {
        _id: id
    }); //fields过滤某字符，这里表示password不显示出来
    res.send(formatData({
        data: result
    }))
})
//查询单个用户信息
Router.get('/photolist/:id', async (req, res) => {
    let {
        id
    } = req.params;
    //查询数据库
    let result = await find('photolist', {
        _id: id
    }); //fields过滤某字符，这里表示password不显示出来
    res.send(formatData({
        data: result
    }))
})

//注册
Router.post('/reg', async (req, res) => {
    //校验用户名


    let {
        email,
        password
    } = req.body;

    let result = await create("userList", {
        email,
        password
    })


    if (result.insertedCount > 0) {
        res.send(formatData());
    } else {
        res.send(formatData({
            status: 0
        }));
    }
})

// 登录
Router.get('/login', async (req, res) => {
    let {
        email,
        password
    } = req.query;
    let data = await find("userList", {
        email,
        password
    })
    if (data.length > 0) {
        res.send(formatData());
    } else {
        res.send(formatData({
            status: 0
        }));
    }

})


module.exports = Router;