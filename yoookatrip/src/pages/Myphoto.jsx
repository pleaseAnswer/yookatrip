import React, { Component } from 'react';
import '../css/mm.scss';

import { Icon, Form, Input, Button } from 'antd';
import pic from '../img/user_no_picture.png'
class Myphoto extends Component{
    goto=()=>{
        this.props.history.push(`/mine/`)
    }
    render(){
        return (
            <div className="myphoto">
                  <header>
                 <div className="boxmine">
                   <Icon type="left" onClick={this.goto}/>
                  
                   <Icon type="unordered-list" />
                   <Icon type="shopping-cart" />
                   </div>
                   <span className="photo" 
                   >我的相册</span>
               </header>
               <div className="photomine">
                   <img src={pic} alt=""/>
                   <p className="p20">暂时还没有相片哦~</p>
               </div>
               <div className="foo">
                   <p className="pp">技术支持：赛会通</p>
               </div>
            </div>
        )
    }
}
export default Myphoto;