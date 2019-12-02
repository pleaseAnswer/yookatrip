import React, { Component } from 'react';
import '../css/myphoto.scss';

import { Icon,Menu } from 'antd';
import nopic from '../img/nomore_bg.png'

class zifen extends Component{
    state = {
        current: 'mail',
      };
    handleClick = e => {
       
        this.setState({
          current: e.key,
        });
      };
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
                   >站内积分</span>
               </header>
              
           <div className="now-points">
			<div className="all-points f24 fl">
				当前积分: <span className="f30 theme2">0 </span>
			</div>
			<div className="rule fr">
				<a href="http://www.yookatrip.com/m/user/member/rule"><i className="f20">?</i>网站积分</a>
		  </div>
         </div>
 
          <div className="history">
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
            <Menu.Item key="mail" >
           
               全部
            </Menu.Item>
            <Menu.Item >
           
            收入
          </Menu.Item>
          <Menu.Item >
           
           支出
          </Menu.Item>
         </Menu>
          </div>

          <div className="points f24 fl">
              <img className="nopic" src={nopic} alt=""/>
          </div>


               <div className="foo">
                   <p className="pp">技术支持：赛会通</p>
               </div>
            </div>
        )
    }
}
export default zifen;