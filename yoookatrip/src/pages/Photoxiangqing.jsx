import React, { Component } from 'react';
import { Icon } from 'antd';
import "../css/photoxiangqing.scss";
import { my } from '../api'
class Photoxiangqing extends Component {
    state = {
        data: []
    }

    goto = () => {
        this.props.history.push(`/Photolist`);
    }

    async componentDidMount() {
        let { id } = this.props.match.params;
        let { data: { data } } = await my.get(`/database/photolist/${id}`);
        this.setState({
            data: data[0]
        })


    }

    render() {
        let { data } = this.state;
        return (
            <div className="Photoxiangqing">
                <div className="uiNavbar">
                    相册详情
                    <div className="goback"><Icon type="left" onClick={this.goto} /></div>
                    <div className="cart"><Icon type="shopping-cart" /></div>
                    <div className="more"><Icon type="bars" /></div>
                </div>

                <div className="media_photo">
                    <img src={data.url} />
                </div>
                <div className="comment_photo">
                    <a href=""><img src="http://st.saihuitong.com/res/img/avatars/system/4_ava029.jpg" /></a>
                    <p className="wen_photo">180***5382&nbsp;&nbsp;&nbsp;&nbsp;10-29&nbsp;&nbsp;&nbsp;&nbsp;16:51:29                    <span className="eyeleft_photo"><Icon type="eye" />&nbsp;&nbsp;53</span>
                    <span className="eyeright_photo"><Icon type="message" />&nbsp;&nbsp;3</span></p>
                </div>
                <div className="reply">
                    <p className="pinglun_photo">网友评论</p>
                </div>
                <div className="replylist">
                    <div className="li-photp">
                        <img src="http://st.saihuitong.com/res/img/avatars/system/4_ava029.jpg" />
                        <a className="num_photo">180****5382</a>
                        <span className="time_photo">2019-11-01&nbsp;&nbsp;21:59</span>
                        <p className="wenh">h</p>
                    </div>
                    <div className="li-photp">
                        <img src="http://st.saihuitong.com/res/img/avatars/system/6_ava026.jpg" />
                        <a className="num_photo">152****1198</a>
                        <span className="time_photo">2019-11-01&nbsp;&nbsp;21:59</span>
                        <div className="text02_photo"><img src="http://st.saihuitong.com/assets/img/emojis/qq/12.gif" /><i className="sb_photo">sb</i></div>
                    </div>
                    <div className="li-photp">
                        <img src="http://st.saihuitong.com/res/img/avatars/system/4_ava029.jpg" />
                        <a className="num_photo">180****5382</a>
                        <span className="time_photo">2019-11-01&nbsp;&nbsp;21:59</span>
                        <div className="text02_photo"><i className="tml_photo">太美啦</i><img className="hua_photo" src="http://st.saihuitong.com/assets/img/emojis/qq/2.gif" /></div>
                    </div>
                </div>
                <div className="none">
                    没有更多了
                </div>
                <div className="foot">技术支持：赛会通</div>
                <div className="ding"><Icon type="form" /></div>
            </div>
        )
    }
}
export default Photoxiangqing;
