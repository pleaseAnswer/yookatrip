import React, { Component } from 'react';
import moment from 'moment';
import { Tooltip, Icon } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartAction from '../store/action/cart';
import my from '../api/my';
import '../css/cart.scss';


const mapDispatchToProps = dispatch => {
    return bindActionCreators(CartAction, dispatch);
}


@connect(mapDispatchToProps)
class Cart extends Component {
    state={
        goodslist:[]
    }
     componentDidMount(){
        // console.log(this.props);
        setTimeout(async () => {
            let {data:{data}} =await my.get('/database/cart');
            
            this.setState({
                goodslist:data
            })  
        }, 1000);
        
    }
    goto2 = (path) => {
        this.props.history.push(path)
    }
    remove = async (id) => {        
        await my.remove(`/database/cart/${id}`);
        let data = this.state.goodslist.filter(item=>item._id!== id)
        this.setState({
            goodslist:data
        })
    }
    render() {
        // console.log(this.props.goodslist);
        
        const {goodslist} = this.state;
        let totalPrice = goodslist.reduce((prev, item) => prev + item.priceMin * item.num, 0);

        return (
            <div>
                <header className="cart-uiNavbar">
                    <div className="icon1" onClick={this.goto2.bind(this, '/activity')}><Icon type="left" /></div>
                    <p className="cart-p">购物车</p>
                    <div>
                        <div className="icon2"><Icon type="shopping-cart" /></div>
                        <div className="icon3" onClick={this.goto2.bind(this, '/home')}><Icon type="bars" /></div>
                    </div>
                </header>
                <div className="cart-main">
                    {goodslist.map(item => (
                        <div key={item._id} className="cart-hd-wrapper">
                            <p className="cart-hd">
                                <input type="checkbox" className="hd-cb" />
                                <a className="hd-text">活动</a>
                            </p>
                            <figure className="cart-img">
                                <img src={item.coverPicUrl} alt="" className="hd-img" />
                                <figcaption className="hd-text-wrapper">
                                    <h5 className="hd-title">{item.title}</h5>
                                    <p className="hd-time">{moment(item.startTime).format("MM/DD")}-{moment(item.endTime).format("MM/DD")}</p>
                                    <div className="hd-price-wrapper">
                                        <a className="hd-price">￥ {item.priceMin}  x  {item.num}</a>
                                        <a className="hd-delete">
                                            <Tooltip title="删除">
                                                <Icon type="delete" style={{ color: '#e55' }} onClick={this.remove.bind(this, item._id)} />
                                            </Tooltip>
                                        </a>
                                    </div>
                                </figcaption>
                            </figure>
                            <p className="cart-xj">小计: ￥ {item.num * item.priceMin}</p>
                        </div>
                    ))}
                </div>
                <div className="cart-footer-wrapper">
                    <div className="cart-footer">
                        <p className="cfooter-qx">
                            
                        </p>
                        <div>
                            <p className="cfooter-zj">总价: ￥ {totalPrice}</p>
                            <p className="cfooter-js">结算</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart;
