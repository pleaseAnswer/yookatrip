import React,{Component} from 'react';
import "../css/photo.scss";
import { Icon } from 'antd';
import "../css/photoxiangqing.scss";
class Photoxiangqing extends Component{
    render(){
        return (
            <div>
                <header className="uiNavbar  oldIndex">
                    相册详情
                    <div className="goback"><Icon type="left" /></div>
                    <div className="cart"><Icon type="shopping-cart" /></div>
                    <div className="more"><Icon type="bars" /></div>
                </header>

                <div className="media">
                    <img src="http://img.saihuitong.com/5636/albumimg/4484598/16e16b6b8a8.jpg-w960" alt=""/>
                </div>
                <div className="comment">
                    <a href=""><img src="http://st.saihuitong.com/res/img/avatars/system/4_ava029.jpg"/></a>
                    <p>180***5382&nbsp;&nbsp;&nbsp;&nbsp;10-29&nbsp;&nbsp;&nbsp;&nbsp;16:51:29</p>
                    <i className="eyeleft"><Icon type="eye" />&nbsp;&nbsp;53</i>
                    <i className="eyeright"><Icon type="message" />&nbsp;&nbsp;3</i>
                </div>
                <div className="reply">
                    <h2>网友评论</h2>
                </div>
                <ul className="replylist">
                    <li>
                        <img src="http://st.saihuitong.com/res/img/avatars/system/4_ava029.jpg"/>
                        <a>180****5382</a>
                        <span>2019-11-01&nbsp;&nbsp;21:59</span>
                        <p>h</p>
                        </li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}
export default Photoxiangqing;
