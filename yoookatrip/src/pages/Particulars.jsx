import React,{Component} from 'react';
import moment from 'moment';
import my from '../api/my';
import {Icon} from 'antd';
import '../css/Particulars.scss';

class Particulars extends Component{
    state = {
        imgdata:'',
        imgs:[],
    }
    getData = async () => {
        let id = this.props.match.params.id;
        let {data:{data}} = await my.get(`/database/activity/${id}`);
        let imgdata = data[0];
        this.setState({
            imgdata
        })
    }
    getImg = async () => {
        let {data:{data}} = await my.get('/database/xiangqing');
        let imgs = data[0].img;
        this.setState({
            imgs
        })
    }
    goback = () => {
        this.props.history.goBack();
    }
    componentDidMount(){
        this.getData();
        this.getImg();
    }
    render(){
        let {imgdata,imgs} = this.state;
        return (
            <div>
                <header className="uiNavbar">
                    <div className="icon1" onClick={this.goback}><Icon type="left" /></div>
                    {imgdata?imgdata.title:''}
                    <div>
                        <div className="icon2"><Icon type="shopping-cart" /></div>
                        <div className="icon3"><Icon type="bars" /></div>
                    </div>
                </header>
                <div className="partmain">
                    <figure>
                        <img src={imgdata?imgdata.coverPicUrl:''} alt="" className="data-img"/>
                        <figcaption>
                            <p className="title">{imgdata.title}</p>
                            <p className="others">
                                <span className="price">费用<a>￥{imgdata.priceMin}</a>/人</span>
                                <span className="baoming">
                                    余位<a>（{imgdata.yuwei}）</a>/已报名<a>（{imgdata.baoming}）</a>
                                </span>
                            </p>
                        </figcaption>
                    </figure>
                    <div className="messg">
                        <p className="aicon">
                            <Icon type="environment" />
                            <a>集 合 地:</a>{imgdata.sourceProvince} {imgdata.sourceCity}
                        </p>
                        <p className="aicon">
                            <Icon type="environment" />
                            <a>目 的 地:</a>{imgdata.destProvince} {imgdata.destCity} {imgdata.destDistrict}
                        </p>
                        <p className="aicon">
                            <Icon type="dashboard" />
                            <a>活动日期:</a>{moment(imgdata.startTime).format("MM/DD")}-{moment(imgdata.endTime).format("MM/DD")}
                        </p>
                        <p className="aicon">
                            <Icon type="user" />
                            <a>管 理 员:</a>{imgdata.userNickname} <a className="phone">18784088886</a>
                        </p>
                        <p className="aicon">
                            <Icon type="sound" />
                            <a>活动亮点:</a>{imgdata.title}
                        </p>
                    </div>
                    <div className="detail">
                        <p className="text">详细信息</p>
                        {imgs.map(item=>{
                            return <img src={item} alt="" key={item} className="detail-img"/>
                        })}
                    </div>
                </div>
                <div className="partfooter">
                    <p className="ask">
                        <Icon type="message" />
                        <i>咨询</i>
                    </p>
                    <p className="button">我要报名</p>
                </div>
            </div>
        )
    }
}
export default Particulars;
