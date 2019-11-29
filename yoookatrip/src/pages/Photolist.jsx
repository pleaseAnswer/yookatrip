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
    async componentDidMount() {
        let { data: { data } } = await my.get('database/photo');

        let a = data[0].listphoto

        console.log(a);
        this.setState({
            list: a
        })


    }
    render() {
        let { list } = this.state;
        return (
            <div>
                <header className="uiNavbar  oldIndex">
                    相册
                    <div className="goback"><Icon type="left" onClick={this.goto} /></div>
                    <div className="cart"><Icon type="shopping-cart" /></div>
                    <div className="more"><Icon type="bars" /></div>
                </header>
                <div className="nine">
                    相册
                    <p>19张图片</p>
                </div>
                <ul className="photo_new">

                    {list.map(item => {
                        return <li><img key={item.id} src={item.url} /></li>
                    }
                    )}
                    {/*                    
                    <li><a><img src="http://img.saihuitong.com/5636/albumimg/4484598/16e16b6b8a8.jpg-cw300h300" /></a></li>
                    <li><a><img src="http://img.saihuitong.com/5636/albumimg/4484598/16e16b6b8a8.jpg-cw300h300" /></a></li>
                    <li><a><img src="http://img.saihuitong.com/5636/albumimg/4484598/16e16b6b8a8.jpg-cw300h300" /></a></li>
                    <li><a><img src="http://img.saihuitong.com/5636/albumimg/4484598/16e16b6b8a8.jpg-cw300h300" /></a></li>
                    <li><a><img src="http://img.saihuitong.com/5636/albumimg/4484598/16e16b6b8a8.jpg-cw300h300" /></a></li>
                    <li><a><img src="http://img.saihuitong.com/5636/albumimg/4484598/16e16b6b8a8.jpg-cw300h300" /></a></li> */}

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
