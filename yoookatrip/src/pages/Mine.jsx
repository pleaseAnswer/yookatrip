import React, { Component } from 'react';
import '../css/mine.scss'
import { Icon } from 'antd'

class Mine extends Component {
  photo = () => {
    this.props.history.push(`/myphoto/`)
  }
  goto = () => {
    this.props.history.push(`/login/`)
  }
  active = () => {
    this.props.history.push(`/active/`)
  }
  myjifen = () => {
    this.props.history.push(`/myjifen/`)
  }
  xiaox = () => {
    this.props.history.push(`/xiaox/`)
  }
  tongzhi = () => {
    this.props.history.push(`/tongzhi/`)
  }

  gotohome=()=>{
    this.props.history.push(`/home/`)
  }
  

 


  render() {

    return (
      <div className="box-mine">
        <header>
          <div className="boxmine">
            <Icon type="left" />
            <Icon type="unordered-list" />
            <Icon type="shopping-cart" />
          </div>
        </header>

        <div className="main">
          <div className="avatar-wrap">
            <div className="pic"></div>
            <div className="username">csdsdscscscsc</div>
            <div className="set"><Icon type="setting" />设置</div>
          </div>
          <ul className="nav-wrap">
            <li className="icon-angleright"><a onClick={this.photo}><i className="imgicon one"></i> <p>我的相册</p> <Icon type="right" /></a></li>
            <li className="icon-angleright"><a onClick={this.active}><i className="imgicon two"></i><p>活动报名</p> <Icon type="right" /></a></li>
            <li className="icon-angleright"><a onClick={this.myjifen}><i className="imgicon three"></i><p>我的积分</p> <Icon type="right" /></a></li>
            <li className="icon-angleright"><a onClick={this.xiaox}><i className="imgicon four"></i><p> 站内消息</p><Icon type="right" /></a></li>
            <li className="icon-angleright"><a onClick={this.tongzhi}><i className="imgicon fire"></i><p>网站通知</p><Icon type="right" /> </a></li>
          </ul>
          <div className="tuichu" onClick={this.goto.bind(this)}>退出</div>

        </div>
      </div>
    )
  }
}
export default Mine;
