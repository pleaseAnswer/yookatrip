import React, { Component } from 'react';
import { my } from '../api'
import '../css/home.css';
import { Icon, Carousel, Menu, Dropdown } from 'antd';

class Home extends Component {

    state = {
        banners: [],
        data1: [],
        data2: [],
        data3: []
    }
    goto(id) {
        this.props.history.push(`/guide/${id}`)
    }
    goto2 = (path) => {
        this.props.history.push(path)
    }
    async componentDidMount() {
        let { data: { data } } = await my.get('/database/shouye');
        let database = data[0];
        let data1 = database.modules[0].moduleData;
        let data2 = database.modules[1].moduleData;
        let list = await my.get('/database/list');
        let data3 = list.data.data;

        this.setState({
            banners: database.banners,
            data1: data1,
            data2: data2,
            data3: data3
        })
    }

    render() {
        let { banners, data1, data2, data3 } = this.state;
        let list = data2.slice(1);
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
            <div id="home">
                <header className="uiNavbar">
                    优客旅行
                   <div className="icon1" onClick={this.goto2.bind(this, '/mine')}><Icon type="user" /></div>
                    <div className="icon2" onClick={this.goto2.bind(this, '/cart')}><Icon type="shopping-cart" /></div>
                    <div className="icon3">
                        <Dropdown overlay={menup} trigger={['click']}>
                            <Icon type="bars" style={{ color: '#ffffff' }} />
                        </Dropdown>
                    </div>

                </header>

                <Carousel autoplay>
                    {
                        banners.map(item => {
                            return <div key={item.id} className="banners" >
                                <img src={item.picUrl} />
                            </div>
                        })
                    }
                </Carousel>
                <div className="data-mode">
                    <div className="mode-title">
                        <span className="title-setColor">优客活动</span>
                        <span className="setColor">更多 ></span>
                    </div>
                    <div className="maina">
                        <ul className="mode-act">
                            {
                                data1.map(item => {
                                    return <li className="state" key={item.id}>
                                        <img src={item.coverPicUrl} />
                                        <h2>{item.title}</h2>
                                        <span className="act-price">￥{item.priceMin}</span>
                                    </li>
                                })
                            }
                            <li className="moreContent">
                                <span>查看</span>
                                <span>更多</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="data-mode">
                    <div className="mode-title">
                        <span className="title-setColor">精彩片段</span>
                        <span className="setColor">更多 ></span>
                    </div>
                    <div className="maina">
                        <ul className="mode-pic">
                            <li className="limax">
                                <img src="http://img.saihuitong.com/5636/albumimg/4484598/16e16b6b8a8.jpg" alt="" />
                            </li>
                            <li className="lismall">
                                {
                                    list.map(item => {
                                        return <div className="xiao" key={item.id}>
                                            <img src={item.photoURL} />
                                        </div>
                                    })
                                }
                            </li>
                            <li className="moreContent1">
                                <span>查看</span>
                                <span>更多</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bottom">
                    <div className="mode-title">
                        <span className="title-setColor">出行指南</span>
                        <span className="setColor">更多 ></span>
                    </div>
                    <ul className="mode-news-img">
                        {
                            data3.map(item => {
                                return <li className="li-wrap" key={item.id} onClick={this.goto.bind(this, item._id)}>
                                    <div className="left">
                                        <p>{item.title}</p>
                                        <h3>5398813 2018-11-29 <Icon type="eye" /> 131</h3>
                                    </div>
                                    <div className="right">
                                        <img src={item.firstImage} />
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="padding">
                    技术支持：赛会通
                 </div>
            </div >

        )
    }
}
export default Home;
