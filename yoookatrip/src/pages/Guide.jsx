import React, { Component } from 'react';
import '../css/guide.css';
import { Icon } from 'antd';
import { my } from '../api';
class Guide extends Component {
    state = {
        data3: []
    }
    goto = () => {
        this.props.history.push('/home')
    }
    async componentDidMount() {
        let { id } = this.props.match.params;
 
        let { data: { data } } = await my.get(`/database/guide/${id}`);
        let data3 = data[0]
       
        this.setState({
            data3: data3
        })

    }
    render() {
        let { data3 } = this.state;
 let {data} =this.state;

        return (
            <div>
                <header className="uiNavbar">
                    {data3.title}
                    <div className="icon1"><Icon type="left" onClick={this.goto} /></div>
                    <div className="icon2"><Icon type="shopping-cart" /></div>
                    <div className="icon3"><Icon type="bars" /></div>
                </header>
                <div className="top">
                    <div className="title">
                        {data3.title}
                    </div>
                    <div className="user-data">
                        <img src={data3.userAvatar} />
                        <span className="time"> 5398813 11-29 10:52</span>
                        <span className="fr">
                            <i className="eye"> <Icon type="eye" className="eye" />150</i>
                            <Icon type="message" /> 0
                        </span>
                    </div>
                </div>
                <p className="pass">{data3.contentSummary}</p>
                <div className="tu">
                    <img src={data3.firstImage} />
                </div>
                <div className="wenzi">1675d61fca6.jpg</div>
                <div className="bcw">网友评论</div>
                <div className="load">
                    <div className="ye">没有更多了</div>
                    <div className="wan">技术支持：赛会通</div>
                </div>
            </div>
        )
    }
}
export default Guide;
