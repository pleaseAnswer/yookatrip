import React,{Component} from 'react';
import { Icon,Button } from 'antd';
import "../css/trip.scss";
class Reg extends Component{
    render(){
        return (
            <div className="trip">
                <div className="uiNavbar">
                    出行贴士
                    <div className="goback"><Icon type="left" onClick={this.goto} /></div>
                    <div className="cart"><Icon type="shopping-cart" /></div>
                    <div className="more"><Icon type="bars" /></div>
                </div>

                <div className="btn"><Button icon="search" className="btn01">Search</Button></div>
            </div>
        )
    }
}
export default Reg;