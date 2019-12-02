import React, { Component } from 'react';
import { Icon, Input, Carousel, Menu, Dropdown } from 'antd';
import "../css/trip.scss";
import { my } from '../api'
class Reg extends Component {
    state = {
        data3: []
    }
    async componentDidMount() {
        let list = await my.get('/database/list');
        let data3 = list.data.data;
        this.setState({
            data3: data3
        })

    }
    goto(id) {
        this.props.history.push(`/guide/${id}`)
    }
    goto2 = (path) => {
        this.props.history.push(path)
    }
    render() {
        let { data3 } = this.state;
        let menup = (
            <Menu>
                <Menu.Item key="0">
                    <h3 style={{ width: '200px', textAlign: 'center', fontSize: '20px' }}>优客旅行</h3>
                </Menu.Item>
                <Menu.Item key="1" onClick={this.goto2.bind(this, '/home')}>
                    <h3 style={{ width: '200px', position: 'relative' }}>
                        <span>首页</span>
                        <span style={{ position: 'absolute', right: '2px', top: '0' }}>></span>
                    </h3>
                </Menu.Item>
                <Menu.Item key="3" onClick={this.goto2.bind(this, '/activity')}>
                    <h3 style={{ width: '200px', position: 'relative' }}>
                        <span>优客活动</span>
                        <span style={{ position: 'absolute', right: '2px', top: '0' }}>></span>
                    </h3>
                </Menu.Item>
                <Menu.Item key="4" onClick={this.goto2.bind(this, '/photo')}>
                    <h3 style={{ width: '200px', position: 'relative' }}>
                        <span>相册</span>
                        <span style={{ position: 'absolute', right: '2px', top: '0' }}>></span>
                    </h3>
                </Menu.Item>
                <Menu.Item key="5" onClick={this.goto2.bind(this, '/trip')}>
                    <h3 style={{ width: '200px', position: 'relative' }}>
                        <span>出行贴士</span>
                        <span style={{ position: 'absolute', right: '2px', top: '0' }}>></span>
                    </h3>
                </Menu.Item>
                <Menu.Item key="6">关于我们 </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="7" onClick={this.goto2.bind(this, '/home')}>
                    <h3 style={{ width: '200px', position: 'relative' }}>
                        <span>关于优客</span>
                        <span style={{ position: 'absolute', right: '2px', top: '0' }}>></span>
                    </h3>
                </Menu.Item>
                <Menu.Item key="8" onClick={this.goto2.bind(this, '/mine')}>
                    <h3 style={{ width: '200px', position: 'relative' }}>
                        <span>个人中心</span>
                        <span style={{ position: 'absolute', right: '2px', top: '0' }}>></span>
                    </h3>
                </Menu.Item>
            </Menu >
        );
        return (
            <div className="trip">
                <div className="uiNavbar">
                    出行贴士
                    <div className="goback"><Icon type="left" onClick={this.goto2.bind(this, '/home')} /></div>
                    <div className="cart"><Icon type="shopping-cart" onClick={this.goto2.bind(this, '/cart')} /></div>
                    <div className="more">
                        <Dropdown overlay={menup} trigger={['click']}>
                            <Icon type="bars" style={{ color: '#ffffff' }} />
                        </Dropdown></div>
                </div>
                <div className="btn"><Input placeholder="请输入关键字" /></div>
                <ul className="trip_ul">
                    {
                        data3.map(item => {
                            return <li className="trip_li" key={item.id} onClick={this.goto.bind(this, item._id)}>
                                <p className="trip_p">
                                    {item.title}
                                </p>
                                <p className="trip_p">5398813</p>
                                <h3 className="trip_h3"> <span className="time"> 2018-11-29</span>
                                    <span className="fr">
                                        <i className="eye"> <Icon type="eye" className="eye" />150</i>
                                        <Icon type="message" /> 0
                           </span></h3>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Reg;