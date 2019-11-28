import React from 'react';
import './App.scss';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import imgUrl from './img/logo.jpg';


import manageList from './pages/manageList';
import userList from './pages/userList';
import orderList from './pages/orderList';
import activeList from './pages/activeList';
import imageList from './pages/imageList';
import questionList from './pages/questionList';
import login from './pages/login';

const { Panel } = Collapse;

class App extends React.Component {
  state = {
    currentPath: '/login',
    menu: [
      {
        name: 'manageList',
        path: '/manageList',
        text1: '管理员管理',
        text2: '管理员列表'
      },
      {
        name: 'userList',
        path: '/userList',
        text1: '优客用户',
        text2: '用户列表'
      },
      {
        name: 'orderList',
        path: '/orderList',
        text1: '优客订单',
        text2: '订单列表'
      },
      {
        name: 'activeList',
        path: '/activeList',
        text1: '优客活动',
        text2: '活动列表'
      },
      {
        name: 'imageList',
        path: '/imageList',
        text1: '优客相册',
        text2: '相册列表'
      },
      {
        name: 'questionList',
        path: '/questionList',
        text1: '优客指南',
        text2: '出行指南'
      }
    ]
  }
  goto = path => {
    console.log('path',path)
    let {history} = this.props;
    this.setState({
      currentPath: path
    })
    history.push(path);
  }
  render(){
    return (
      <div>
        <div className="header">
            <img className="logo" src={imgUrl} alt=""/>
            <p className="yooka">yookatrip后台管理系统</p>
        </div>
        <div className="main">
          <div className="left">
            <Collapse defaultActiveKey={['1']}>
              {
                this.state.menu.map(item=>{
                  return (
                    <Panel header={item.text1} key={item.name}>
                      <p onClick={this.goto.bind(this,item.name)}>{item.text2}</p>
                    </Panel>
                  )
                })
              }
            </Collapse>
          </div>
          <div className="right">
            <Switch>
              <Route path='/manageList' component={manageList} />
              <Route path='/userList' component={userList} />
              <Route path='/orderList' component={orderList} />
              <Route path='/activeList' component={activeList} />
              <Route path='/imageList' component={imageList} />
              <Route path='/questionList' component={questionList} />
              <Route path='/login' component={login} />
              <Redirect from='/' to='/login' exact />
            </Switch>
          </div>
        </div>
        
      </div>
    );
  }
}

App = withRouter(App);
export default App;
