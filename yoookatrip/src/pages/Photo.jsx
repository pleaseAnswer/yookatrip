import React, { Component } from 'react';
import "../css/photo.scss";
import { Icon, Divider } from 'antd';


class Photo extends Component {
    goto = () => {
        this.props.history.push(`/photolist/`)
    }
    go=()=>{
        this.props.history.push(`/Home/`)
    }
    
    render() {
        return (
            <div className="photo">
                <div className="uiNavbar">
                    相册
                    <div className="goback"><Icon type="left" onClick={this.go}/></div>
                    <div className="cart"><Icon type="shopping-cart" /></div>
                    <div className="more"><Icon type="bars" /></div>
                </div>
                <article className="leftPic">
                    <div className="line"></div>
                    <div className="pic" onClick={this.goto} >
                        <img src="http://img.saihuitong.com/5636/albumimg/3847172/16777152b07.jpg-cw400h400" alt="" />
                        <div className="text">
                            <p>相册</p>
                            <p>19张相片</p>
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
