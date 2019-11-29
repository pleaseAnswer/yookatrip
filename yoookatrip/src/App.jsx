import React from 'react';
import { Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import { Icon } from 'antd';
import 'antd/dist/antd.css';
import './css/App.css';
import './css/base.css'

import Home from './pages/Home.jsx'
import Activity from './pages/Activity.jsx'
import Photo from './pages/Photo.jsx'
import Mine from './pages/Mine.jsx'
import Login from './pages/Login.jsx'
import Reg from './pages/Reg.jsx'
import Photoxiangqing from './pages/Photoxiangqing.jsx'
import Photolist from './pages/Photolist.jsx'
import Particulars from './pages/Particulars.jsx'
import Cart from './pages/Cart.jsx'


class App extends React.Component {

    state = {
        currentIndex: 0,
        menu: [{
            name: 'home',
            path: '/home',
            icon: 'home',
            text: '首页'
        }, {
            name: 'activity',
            path: '/activity',
            icon: 'flag',
            text: '优客活动'
        },
        {
            name: 'photo ',
            path: '/photo',
            icon: 'picture',
            text: '相册'
        }, {
            name: 'mine',
            path: '/mine',
            icon: 'user',
            text: '个人中心'
        }
        ]
    }

    goto(path) {
        this.props.history.push(path)
    }


    render() {

        return (
            <div className="App">
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/activity" component={Activity} />
                    <Route path="/photo" component={Photo} />
                    <Route path="/mine" component={Mine} />
                    <Route path="/login" component={Login} />
                    <Route path="/reg" component={Reg} />
                    <Route path="/photoxiangqing" component={Photoxiangqing} />
                    <Route path="/photolist" component={Photolist} />
                    <Route path="/particulars/:id" component={Particulars} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/notfound" render={() => <div>404页面</div>} />
                    <Redirect from="/" to="/home" exact />
                    <Redirect to="/notfound" />
                </Switch>
                <ul className="footer-tabs">
                    {
                        this.state.menu.map(item => {
                            return <li key={item.name} onClick={this.goto.bind(this, item.path)}
                            >
                                <i> <NavLink
                                    to={item.path}
                                    style={{ color: '#999' }}
                                    activeStyle={{ color: '#02a578' }}
                                    replace
                                > <Icon type={item.icon} /></NavLink></i>
                                <span > <NavLink
                                    to={item.path}
                                    style={{ color: '#999' }}
                                    activeStyle={{ color: '#02a578' }}
                                    replace
                                >{item.text}</NavLink> </span>
                            </li>
                        })
                    }
                </ul>

            </div>
        )
    }
}
App = withRouter(App);
export default App;