import React, { Component } from 'react';
import moment from 'moment';
import LazyLoad from 'react-lazyload';
import my from '../api/my';
import '../css/Ativity.scss';
import { Icon, Carousel, Menu, Dropdown } from 'antd';

class Activity extends Component {
    state = {
        menu: []
    }
    getData = async () => {
        let { data: { data } } = await my.get('/database/activity');
        this.setState({
            menu: data
        })
    }
    goto = (id) => {
        this.props.history.push(`/particulars/${id}`);
    }
    goto2 = (path) => {
        this.props.history.push(path)
    }
    componentDidMount() {
        this.getData();
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
            <div>
                <header className="uiNavbar">
                    <div className="icon1" onClick={this.goto2.bind(this, '/home')}><Icon type="left" /></div>
                    优客活动
                    <div>
                        <div className="icon2" onClick={this.goto2.bind(this, '/cart')}><Icon type="shopping-cart" /></div>
                        <div className="icon3">
                            <Dropdown overlay={menup} trigger={['click']}>
                                <Icon type="bars" style={{ color: '#ffffff' }} />
                            </Dropdown></div>
                    </div>
                </header>
                <div className="act-select">
                    <Icon type="funnel-plot" />
                    <p className="act-change">筛选</p>
                </div>
                <div className="act-main">
                    {this.state.menu.map(item => {
                        return <article key={item.id} onClick={this.goto.bind(this, item._id)}>
                            <figure className="act-wrap">
                                <LazyLoad height={200}>
                                    <img src={item.coverPicUrl} alt="" className="act-img" />
                                </LazyLoad>
                                <figcaption>
                                    <h5>{item.title}</h5>
                                    <p className="act-time">
                                        <Icon type="schedule" />
                                        <i>{moment(item.startTime).format("YYYY/MM/DD")}</i>
                                        -
                                        <i>{moment(item.endTime).format("YYYY/MM/DD")}</i>
                                    </p>
                                    <p className="act-tip">
                                        <i className="price">￥ {item.memberPriceMin}</i>
                                        <i className="baoming">
                                            {Date.now() > item.endTime ? '报名已结束' : '正在报名中'}
                                        </i>
                                    </p>
                                </figcaption>
                            </figure>
                            <p className="act-where">
                                <Icon type="compass" />{item.sourceProvince}{item.sourceCity}
                            </p>
                            <div className="act-peo">
                                <p className="act-res">余位{item.yuwei}</p>
                                <p className="act-ora">报名{item.baoming}</p>
                            </div>
                        </article>
                    })}
                </div>
                <div className="act-footer">
                    <p className="no-more">-------没有更多了-------</p>
                    <p className="skill">技术支持：赛会通</p>
                </div>
            </div>
        )
    }
}
export default Activity;
