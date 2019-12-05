import React, { Component } from 'react';
import '../css/reg.scss';

import { Icon, Form, Input, Button } from 'antd'
import { my } from '../api'


class Reg extends Component {
    state = {
        num: 4501,
        confirmDirty: false,
        autoCompleteResult: [],
        inpValue: '',
        text: '',
        email: '',

    }

    // 随机颜色
    changeNum = () => {
        this.r = Math.floor(Math.random() * 255);
        this.g = Math.floor(Math.random() * 255);
        this.b = Math.floor(Math.random() * 255);
        this.refs.v_container.style.background = 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',0.8)';
        this.setState({
            num: parseInt(Math.random() * 9000 + 999),
            autoCompleteResult: [],
            confirmDirty: false
        })

    }

    // 点击下一步
    submitForm = (e) => {
        e.stopPropagation()
        if (this.state.inpValue * 1 === this.state.num) {
            this.setState({
                confirmDirty: true,
            })
        } else if (this.state.inpValue === '') {
            this.setState({
                text: '请输入字符',
                inpValue: '',
            })
        } else {
            this.setState({
                text: '请输入正确的字符',
                autoCompleteResult: [],
                confirmDirty: false,
                inpValue: '',
            })

        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            let { email, password } = values

            if (!err) {
                
                let { data } = await my.post("/database/reg", {
                    email,
                    password
                })
                if (data.status == 1) {
                    this.props.history.push(`/login/`);
                } else {
                 alert('注册失败')
              }
            } 
        });

    }

    change(e) {
        this.setState({
            inpValue: e.target.value * 1

        })
    }

    

    //   点击注册
    // go = () => {


    // }
    componentDidMount() {

    }
    goto = () => {
        this.props.history.push(`/home/`);
    }
    iconLef = () => {
        this.props.history.push(`/login/`)
    }
    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
      
        return (
            <div className="box-reg">
                <header>
                    <div className="box">
                        <Icon type="left" onClick={this.iconLef.bind(this)} />
                        <span className="text">注册</span>
                        <p className="p" onClick={this.goto.bind(this)}>随便逛逛</p>
                    </div>
                </header>

                {/* 用户名 */}
                <Form onSubmit={this.handleSubmit} onSubmit={this.handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: '请输入正确的手机或邮箱',
                                },
                                {
                                    required: true,
                                    message: '请输入手机或邮箱',
                                },

                            ],
                        })(
                            <Input
                                prefix={<Icon type="user" />}
                                placeholder="手机 / 邮箱"
                         
                            />
                        )}
                    </Form.Item>

                    {/* 密码 */}
                    <Form.Item className={`active ${this.state.confirmDirty? 'block':''}`}>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入你的密码',
                                },

                                { min: 6, max: 12, message: "长度在6到12位数字或者字母", trigger: "blur" }
                            ],
                        })(<Input.Password placeholder="请输入6到12位数字或者字母" prefix={<Icon type="lock" />} style={{ color: '#fff' }} />)}
                    </Form.Item>



                    <Form.Item className={this.state.confirmDirty ? "active" : ''}>
                        <input type="text" name="" id=""
                            style={{ width: "240px", height: "vw(86)", float: "left", background: "rgba(255,255,255,.3)", border: "1px solid #fff" }}
                            prefix={<Icon type="smile" style={{ color: 'rgba(255,255,255,.6)' }} />}
                            value={this.state.inpValue} onChange={this.change.bind(this)}
                            placeholder="请输入图中的字符" />

                        <div id="v_container"
                            ref="v_container"
                            style={{
                                width: "90px", height: "43px",
                                background: "#57dba4",
                                float: "right", fontSize: " 20px",
                                color: "#fff",
                                textAlign: "center", lineHeight: "vw(43)"
                            }}
                            onClick={this.changeNum.bind(this)}
                        >{this.state.num}</div>

                        <div id="cc">{this.state.text}</div>
                    </Form.Item>




                    <Form.Item className={this.state.confirmDirty ? "active" : ''}>
                        <Button type="primary" htmlType="submit" className="login-form-button"
                            onClick={this.submitForm.bind(this)}
                        >
                            下一步
                        </Button>
                    </Form.Item>
                    <Form.Item className={`active ${this.state.confirmDirty ? 'block' : ''}`}>
                        <Button type="primary" htmlType="submit" className="login-form-button"
                            // onClick={this.go.bind(this)}

                        >
                            注册
                        </Button>
                    </Form.Item>

                </Form>

            </div>
        )
    }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(Reg);
export default WrappedRegistrationForm;
