import React,{Component} from 'react';
import moment from 'moment';
import LazyLoad from 'react-lazyload';
import my from '../api/my';
import '../css/Ativity.scss';
import { Icon } from 'antd';

class Activity extends Component{
    state = {
        menu: []
    }
    getData = async () =>{
        let {data:{data}} = await my.get('/database/activity');
        console.log(data);
        let result = data[0].result;
        this.setState({
            menu: result
        })
        console.log(this.state);
    }
    componentDidMount(){
        this.getData();
        const wrapper = this.refs.mywrap;
    }
    render(){
        console.log('this.state.menu',this.state.menu);
        
        return (
            <div>
                <header className="uiNavbar">
                    <div className="icon1"><Icon type="left" /></div>
                    优客活动
                    <div>
                        <div className="icon2"><Icon type="shopping-cart" /></div>
                        <div className="icon3"><Icon type="bars" /></div>
                    </div>
                </header>
                <div className="act-select">
                    <Icon type="funnel-plot" />
                    <p className="act-change">筛选</p>
                </div>
                <div className="main">
                    {this.state.menu.map(item => {
                        return <article key={item.id}>
                            <figure className="act-wrap">
                                <LazyLoad height={200}>
                                    <img src={item.coverPicUrl} alt="" className="act-img"/>
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
                                            {Date.now()>item.endTime ? '报名已结束' : '正在报名中'}
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
                <div className="footer">
                    <p className="no-more">-------没有更多了-------</p>
                    <p className="skill">技术支持：赛会通</p>
                </div>
            </div>
        )
    }
}
export default Activity;
