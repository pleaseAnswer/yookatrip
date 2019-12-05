import React, { Component } from 'react';
import '../css/myphoto.scss';

import { Icon} from 'antd';

class active extends Component{
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
                   >站内消息</span>
               </header>
               <div className="photomine">
                   <p className="p20"><span>“欢迎加入<a href="http://www.yookatrip.com" target="_blank">优客旅行</a>, 有您相伴, 是我们最大的荣幸 ^_^！”</span></p>
               </div>
               <div className="foo">
                   <p className="pp">技术支持：赛会通</p>
               </div>
            </div>
        )
    }
}
export default active;