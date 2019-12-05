## 项目名称：优客旅行(webAPP)+后台管理系统
>优客旅行是一款基于React框架开发的致力于为每位客户提供省心、自由、高性价比的海外自由行方案,让旅行有温度的线上APP。
> 后台管理系统提供各部门管理员信息查看、用户注册信息管理、相册信息管理以及出行贴士信息管理。

### 上线地址：

### git仓库地址：
* https://github.com/gzh51910/yookatrip/tree/dev

### 技术栈
* 前端：React React-dom React-router-dom  redux React-redux Ant Design 
* 后端：nodejs Express MongoDB

### 团队与分工：

* 组长：邱南焰 成员：周悦欣 劳紫恩 黎州平

#### 分工如下：

###### 邱南焰：
* app项目主体架构：利用React-cli脚手架，搭建公共部分架构，使用React-router实现页面切换，爬取数据，
  最后将组员的各个页面进行合并整合。
* 首页：使用Ant Design框架实现页面结构与相应功能，利用axios请求数据渲染页面。
* 出行贴士：使用Ant Design框架实现页面结构与相应功能，利用axios请求数据渲染页面。
* 后台管理系统：使用Ant Design框架实现活动列表和相册列表的页面。

###### 周悦欣：
* 首页：使用antd框架以及elementUI框架实现页面；编写数据接口拿取数据渲染页面；利用懒加载原理实现页面图片的加载；
* 详情页：实现静态页面的编写；
* 数据爬取：爬取首页数据并整理数据格式；
* 后台管理系统：利用vue-cli搭建框架，实现组件化；使用vue-router实现页面切换；利用axios请求数据实现各个页面的数据渲染、分页效果、分页切换效果、分页切换禁用状态的小细节以及实现数据的删除功能；
* 编文档写

###### 劳紫恩：
* 注册页:实现正则判断，跳转登录页，用户名保存数据库；
* 登录页:实现正则判断，页面跳转，利用react-router-dom，readx实现路由守卫，利用axios请求数据库获取用户名和密码进行登录；
* 个人中心:实现实现页面跳转，及个人中心页的五个子静态页面；
* 后台管理系统:1.订单列表的静态页面，2.利用数据渲染用户列表的静态页面，并实现分页功能 3.登录页及其功能

###### 黎州平：

* 相册页：使用Ant Design框架实现静态页面的编写，实现跳转功能；
* 相册列表页：使用Ant Design框架实现静态页面的编写，并爬取该页面的数据，写接口， 结合后端传来的数据渲染实现列表页，实现跳转功能；
* 相册详情页：使用Ant Design框架实现页面；
* 后台管理系统：使用Ant Design框架实现管理员权限页面和出行贴士页面。




### 项目页面截图：
* webAPP
    ![home](https://github.com/gzh51910/Joyfully/blob/dev/project_img/Joyfully-home.png)
    ![游客活动](https://github.com/gzh51910/Joyfully/blob/dev/project_img/Joyfully-fenlei.png)
    ![相册](https://github.com/gzh51910/Joyfully/blob/dev/project_img/Joyfully-nation.png)
    ![个人中心](https://github.com/gzh51910/Joyfully/blob/dev/project_img/Joyfully-mine.png)
    ![注册](https://github.com/gzh51910/Joyfully/blob/dev/project_img/Joyfully-cart.png)
    ![登录]
    ![购物车]

* 后台管理系统
   ![管理员列表](https://github.com/gzh51910/Joyfully/blob/dev/project_img/FBMS-login.png)
   ![用户列表](https://github.com/gzh51910/Joyfully/blob/dev/project_img/FBMS-mangelist.png)
   ![订单列表](https://github.com/gzh51910/Joyfully/blob/dev/project_img/FBMS-userlist.png)
   ![活动列表](https://github.com/gzh51910/Joyfully/blob/dev/project_img/FBMS-goodslist.png)
   ![相册列表](https://github.com/gzh51910/Joyfully/blob/dev/project_img/FBMS-orderlist.png)
    ![出行指南]
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
