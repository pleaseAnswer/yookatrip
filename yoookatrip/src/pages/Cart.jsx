import React,{Component} from 'react';
import moment from 'moment';
import {Tooltip,Icon} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CartAction from '../store/action/cart';
import '../css/cart.scss';

const mapStateToProps = state => {
    let {goodslist} = state.cart;
    let totalPrice = goodslist.reduce((prev,item)=>prev+item.priceMin*item.goods_qty,0);
    return{
        goodslist,
        totalPrice
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators(CartAction,dispatch);
}

@connect(mapStateToProps,mapDispatchToProps)
class Cart extends Component{
    render(){
        console.log(this.props);
        const {goodslist,totalPrice,remove} = this.props;
        
        return (
            <div>
                <header className="cart-uiNavbar">
                    <div className="icon1" onClick={this.goback}><Icon type="left" /></div>
                    <p className="cart-p">购物车</p>
                    <div>
                        <div className="icon2"><Icon type="shopping-cart" /></div>
                        <div className="icon3"><Icon type="bars" /></div>
                    </div>
                </header>
               <div className="cart-main">
                {goodslist.map(item => (
                    <div key={item.goods_id} className="cart-hd-wrapper">
                        <p className="cart-hd">
                            <input type="checkbox" className="hd-cb"/>
                            <a className="hd-text">活动</a>
                        </p>
                        <figure className="cart-img">
                            <img src={item.coverPicUrl} alt=""  className="hd-img"/>
                            <figcaption className="hd-text-wrapper">
                                <h5 className="hd-title">{item.title}</h5>
                                <p className="hd-time">{moment(item.startTime).format("MM/DD")}-{moment(item.endTime).format("MM/DD")}</p>
                                <div className="hd-price-wrapper">
                                    <a className="hd-price">￥ {item.priceMin}  x  {item.goods_qty}</a>
                                    <a className="hd-delete">
                                        <Tooltip title="删除">
                                            <Icon type="delete" style={{color:'#e55'}} onClick={remove.bind(this,item.goods_id)} />
                                        </Tooltip>
                                    </a>
                                </div>
                            </figcaption>
                        </figure>
                        <p className="cart-xj">小计: ￥ {item.goods_qty* item.priceMin}</p>
                    </div>
                ))}
               </div>
               <div className="cart-footer-wrapper">
                <div className="cart-footer">
                        <p className="cfooter-qx">
                        <input type="checkbox" />全选
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
