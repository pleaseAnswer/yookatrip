import React, { Component } from 'react';
import '../css/login.scss';
import { my } from '../api'

import '@babel/plugin-proposal-decorators'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import UserAction, { LOGIN } from '../store/action/common'

import  {Icon,Form, Input, Button} from 'antd'



const {login} =UserAction;
//  映射属性（获取）
const mapStateToProps = (state)=>{
  let {user} = state.common;

  let email=user.email;
  return {
      user,
     email
  }
}


class Login extends Component {


    goto = () => {
        this.props.history.push(`/reg/`);
    }



    handleSubmit = e => {
        e.preventDefault();


        this.props.form.validateFields(async(err, values) => {
          let { email, password } = values

    
          if (!err) {
            let { data } = await my.get("/database/login", {
              email,
              password
          })
          let user={email:'email',password:'password'};
           localStorage.setItem('user',JSON.stringify(user));
    
          
          if (data.status === 1) {
              this.props.history.push(`/mine/`);
          } else {
           alert('登录失败')
        }
          }

        });
    };
    submitForm = () => {

    }

    checkAccount(rule, value, callback) {
        //与表单数据进行关联

        //正则用//包起来
        var regex = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/;
        var reg = /^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$/
        if (value) {
            //react使用正则表达式变量的test方法进行校验，直接使用value.match(regex)显示match未定义
            if (regex.test(value) || reg.test(value)) {
                callback();
            } else {
                callback('请输入正确的手机号码!');
            }
        } else {
            //这里的callback函数会报错
        }
    }
    iconL = () => {
        this.props.history.push(`/reg/`)
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="Box">
                <header>
                    <div className="box">
                        <Icon type="left" onClick={this.iconL.bind(this)} />
                        <span className="text">登录</span>
                        <p className="p" onClick={this.goto.bind(this)}>注册</p>
                    </div>
                </header>

                <Form onSubmit={this.handleSubmit} className="login-form">

                    <Form.Item>
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: '请输入正确的手机或邮箱',
                                },
                                {
                                    required: true,
                                    message: '请输入你的用户名',
                                },

                            ],
                        })(
                            <Input
                                prefix={<Icon type="user" />}
                                placeholder="手机 / 邮箱"

                            />
                        )}
                    </Form.Item>

            <Form.Item>
            {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入你的密码' }],
            })(
                <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
                
                />
            )}
            </Form.Item>
                   
                  

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.submitForm.bind(this)}>
                            登录
                        </Button>
                    </Form.Item>
                    <div className="form-line">
                        <p className="phone-login">手机验证码登录</p>
                        <p className="reset-link">忘记密码?</p>
                    </div>

                    <div className="third-party">
                        <p className="three">第三方登录</p>
                        <ul>
                            <li><a href="https://graph.qq.com/oauth2.0/authorize?response_type=code&amp;client_id=101192654&amp;redirect_uri=http://www.saihuitong.com/thirdpart/qq/login&amp;state=W1604_0_0_%2Fuser">
                                <Icon type="qq" />
                                <p className="QQ">QQ</p>
                            </a></li>
                            <li><a href="https://api.weibo.com/oauth2/authorize?client_id=1495759747&amp;redirect_uri=http://www.saihuitong.com/thirdpart/weibo/login&amp;state=W1604_0_0_%2Fuser&amp;scope=all&amp;display=default&amp;forcelogin=false">
                                <Icon type="weibo-square" />
                                <p className="wb">微博</p>
                            </a></li>

                        </ul>
                    </div>
                </Form>



            </div>

        )
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

Login = connect(mapStateToProps)(Login)
Login = withRouter(Login)
  
export default  WrappedNormalLoginForm;
