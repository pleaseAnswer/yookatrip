import React, { Component } from 'react';
import "../css/photo.scss";
import { Icon, Divider, Menu, Dropdown } from 'antd';


class Photo extends Component {
    goto = () => {
        this.props.history.push(`/photolist/`)
    }
    goto2 = (path) => {
        this.props.history.push(path)
    }

    render() {
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
            <div className="photo">
                <div className="uiNavbar">
                    相册
                    <div className="goback"><Icon type="left" onClick={this.goto2.bind(this,'/home')} /></div>
                    <div className="cart"><Icon type="shopping-cart" onClick={this.goto2.bind(this,'/cart')} /></div>
                    <div className="more">
                        <Dropdown overlay={menup} trigger={['click']}>
                            <Icon type="bars" style={{ color: '#ffffff' }} />
                        </Dropdown></div>
                </div>
                <article className="leftPic">
                    <div className="line"></div>
                    <div className="pic" onClick={this.goto} >
                        <img src="http://img.saihuitong.com/5636/albumimg/3847172/16777152b07.jpg-cw400h400" alt="" />
                        <div className="text_photo">
                            <p className="xiangce_photo">相册</p>
                            <p className="xiangce_photo2">19张相片</p>
                        </div>
                    </div>
                    <div className="none">
                        <Divider>没有更多了</Divider>
                    </div>
                    <div className="fot">技术支持：赛会通</div>
                </article>
            </div>
        )
    }
}
export default Photo;
