## 项目名称：优客旅行(webAPP)+后台管理系统
>优客旅行是一款基于React框架开发的致力于为每位客户提供省心、自由、高性价比的海外自由行方案,让旅行有温度的线上APP。
> 后台管理系统提供各部门管理员信息查看、用户注册信息管理、相册信息管理以及出行贴士信息管理。

### 上线地址：
* webApp：http://www.xn--fw2ak3t.top:1920/
* 后台管理系统：http://www.xn--fw2ak3t.top:1921/
>后台管理系统登录账号&密码：2737252@qq.com & 123456

### 技术栈
* 前端：React React-dom React-router-dom  redux React-redux Ant Design 
* 后端：nodejs Express MongoDB

### 项目职责：
* 优客活动：使用语义化标签实现静态页面渲染以及实现了让字体在谷歌浏览器显示小于12像素；利用axios请求数据渲染页面。
* 活动详情页：使用antd框架实现静态页面渲染，利用axios请求数据渲染页面，以及实现将数据写入购物车。
* 购物车：使用antd框架实现静态页面渲染，利用redux-saga实现页面渲染和删除功能（暂未实现）
* 后台管理系统主体架构：利用react-cli脚手架，搭建公共部分架构，使用react-router实现页面切换。


### 项目页面截图：
* webAPP
    ![home](https://github.com/gzh51910/yookatrip/blob/dev/project_img/yookatrip-home.png)
    ![游客活动](https://github.com/gzh51910/yookatrip/blob/dev/project_img/active.png)
    ![相册](https://github.com/gzh51910/yookatrip/blob/dev/project_img/photo.png)
    ![个人中心](https://github.com/gzh51910/yookatrip/blob/dev/project_img/mine.png)
    ![注册](https://github.com/gzh51910/yookatrip/blob/dev/project_img/reg.png)
    ![登录](https://github.com/gzh51910/yookatrip/blob/dev/project_img/login.png)
    ![购物车](https://github.com/gzh51910/yookatrip/blob/dev/project_img/cart.png)

* 后台管理系统
   ![管理员列表](https://github.com/gzh51910/yookatrip/blob/dev/project_img/manage.png)
   ![用户列表](https://github.com/gzh51910/yookatrip/blob/dev/project_img/list.png)
   ![订单列表](https://github.com/gzh51910/yookatrip/blob/dev/project_img/dingdanlist.png)
   ![活动列表](https://github.com/gzh51910/yookatrip/blob/dev/project_img/activelist.png)
   ![相册列表](https://github.com/gzh51910/yookatrip/blob/dev/project_img/photolist.png)
    ![出行指南](https://github.com/gzh51910/yookatrip/blob/dev/project_img/zhinan.png)
### 项目文件目录：
##### database文件
>
│  package-lock.json
│  package.json
│
└─src
    │  config.json
    │  package-lock.json
    │  server.js
    │
    ├─db
    │      mongodb.js
    │
    ├─routers
    │      database.js
    │      index.js
    │
    └─utils
            index.js
            token.js

##### webAPP  [yookatrip]
>
│  .env
│  .gitignore
│  config-overrides.js
│  package-lock.json
│  package.json
│  README.md
│
├─public
│      favicon.ico
│      index.html
│      logo192.png
│      logo512.png
│      manifest.json
│      robots.txt
│
└─src
    │  .babelrc
    │  App.jsx
    │  App.test.js
    │  index.js
    │  serviceWorker.js
    │
    ├─api
    │      index.js
    │      my.js
    │
    ├─css
    │      App.css
    │      App.min.css
    │      App.scss
    │      Ativity.scss
    │      base.css
    │      cart.scss
    │      common.css
    │      guide.css
    │      guide.min.css
    │      guide.scss
    │      home.css
    │      home.min.css
    │      home.scss
    │      login.css
    │      login.min.css
    │      login.scss
    │      mine.css
    │      mine.min.css
    │      mine.scss
    │      mm.css
    │      mm.min.css
    │      mm.scss
    │      myphoto.css
    │      myphoto.min.css
    │      myphoto.scss
    │      Particulars.scss
    │      photo.scss
    │      photolist.scss
    │      photoxiangqing.css
    │      photoxiangqing.min.css
    │      photoxiangqing.scss
    │      reg.css
    │      reg.min.css
    │      reg.scss
    │      trip.css
    │      trip.min.css
    │      trip.scss
    │
    ├─img
    │      avatar_bg.jpg
    │      blur_bg.jpg
    │      nomore_bg.png
    │      sprite.png
    │      tou.jpg
    │      user_no_picture.png
    │
    ├─pages
    │      Active.jsx
    │      Activity.jsx
    │      Cart.jsx
    │      Guide.jsx
    │      Home.jsx
    │      Login.jsx
    │      Mine.jsx
    │      Myjifen.jsx
    │      Myphoto.jsx
    │      Particulars.jsx
    │      Photo.jsx
    │      Photolist.jsx
    │      Photoxiangqing.jsx
    │      Reg.jsx
    │      Tongzhi.jsx
    │      Trip.jsx
    │      Xiaox.jsx
    │
    └─store
        │  index.js
        │
        ├─action
        │      cart.js
        │      common.js
        │
        ├─reducer
        │      cart.js
        │      common.js
        │      index.js
        │
        └─saga
                index.js
##### 后台管理系统 [FBMS]
>
│  .gitignore
│  package-lock.json
│  package.json
│  README.md
│
├─public
│      favicon.ico
│      index.html
│      logo192.png
│      logo512.png
│      manifest.json
│      robots.txt
│
└─src
    │  .babelrc
    │  App.js
    │  App.scss
    │  App.test.js
    │  index.css
    │  index.js
    │  logo.svg
    │  serviceWorker.js
    │
    ├─api
    │      index.js
    │      my.js
    │
    ├─img
    │      logo.jpg
    │
    └─pages
            activeList.js
            imageList.js
            login.js
            manageList.js
            orderList.js
            questionList.js
            userList.js
