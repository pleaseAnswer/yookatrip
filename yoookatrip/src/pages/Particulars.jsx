import React,{Component} from 'react';
import moment from 'moment';
import my from '../api/my';
import {Icon,InputNumber} from 'antd';
import '../css/Particulars.scss';

class Particulars extends Component{
    state = {
        imgdata:'',
        imgs:[],
        num:1
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
    changNum = (num) => {
        this.setState({
            num
        })
    }
    changWybm = () =>{
        this.wybm.classList.remove('hidden');
        this.wybmfooter.classList.remove('hidden');
        this.owrap.classList.add('zezhao');
    }
    componentDidMount(){
        this.getData();
        this.getImg();
    }
    render(){
        let {imgdata,imgs,num} = this.state;
        return (
            <div>
                <header className="part-uiNavbar">
                    <div className="icon1" onClick={this.goback}><Icon type="left" /></div>
                    <p className="part-p">{imgdata?imgdata.title:''}</p>
                    <div>
                        <div className="icon2"><Icon type="shopping-cart" /></div>
                        <div className="icon3"><Icon type="bars" /></div>
                    </div>
                </header>
                <div className="part-main">
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
                <div className="part-wybm hidden" ref={ele=>this.wybm=ele}>
                    <figure className="wybm-mainmsg">
                        <img src={imgdata?imgdata.coverPicUrl:''} alt="" className="wybm-img"/>
                        <figcaption className="wybm-text">
                            <h5 className="wybm-title">{imgdata.title}</h5>
                            <p className="wybm-yuwei">余位：{imgdata.yuwei}</p>
                        </figcaption>
                    </figure>
                    <div className="wybm-choose">
                        <p className="wybm-renshu">选择人数：</p>
                        <div className="wybm-changenum">
                            <i className="wybm-money">
                                ￥{imgdata.priceMin}/人
                            </i>
                            <div className="wybm-button">
                                <InputNumber size="large" min={1} max={100000} defaultValue={1} onChange={this.changNum}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="part-footer">
                    <p className="ask">
                        <Icon type="message" />
                        <i>咨询</i>
                    </p>
                    <p className="button" onClick={this.changWybm}>我要报名</p>
                </div>
                <div className="hidden" ref={ele =>this.wybmfooter=ele}>
                    <div className="part-wybm-footer">
                        <p className="wybm">
                            {num}人
                        </p>
                        <div className="wybm-button-wrap">
                            <div className="wybm-button">
                                <p>预付定金</p>
                                <p>￥{2000*num}</p>
                            </div>
                            <div className="wybm-button wybm-button-2">
                                <p>全额付款</p>
                                <p>￥{imgdata.priceMin*num}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={ele => this.owrap=ele}></div>
            </div>
        )
    }
}
export default Particulars;
