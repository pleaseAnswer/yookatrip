import React, { Component } from 'react';
import { Icon, Divider } from 'antd';
import "../css/photolist.scss";
import { my } from '../api';
class Photolist extends Component {

    state = {
        list: []
    }

    goto = () => {
        this.props.history.push(`/photo/`);
    }
    go = (id) => {
        this.props.history.push(`/Photoxiangqing/${id}`)
    }
    async componentDidMount() {
        let { data: { data } } = await my.get('database/photo');


        this.setState({
            list: data
        })


    }
    render() {
        let { list } = this.state;
        return (
            <div className="Photolist">
                <div className="uiNavbar">
                    相册
                    <div className="goback"><Icon type="left" onClick={this.goto} /></div>
                    <div className="cart"><Icon type="shopping-cart" /></div>
                    <div className="more"><Icon type="bars" /></div>
                </div>
                <div className="nine">
                    相册
                    <p>19张图片</p>
                </div>
                <ul className="photo_new">

                    {list.map(item => {
                        return <li key={item.id} onClick={this.go.bind(this, item._id)} ><img src={item.url} /></li>
                    }
                    )}

                </ul>
                <div className="none">
                    <Divider>没有更多了</Divider>
                </div>
                <div className="foot">技术支持：赛会通</div>
            </div>
        )
    }
}
export default Photolist;
