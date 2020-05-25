import React,{Component} from 'react'
import { Form, Input, Button, message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import $http from '../../api/http'
import './login.css'
import { Redirect } from 'react-router-dom';
//登录

 class Login extends Component{
  onFinish = async (values) => {
    // console.log(values)
     const res = await $http.post('admin/login',values)
     console.log(res)
     if(+res.status === 200){
       message.success('login success')
       localStorage.setItem("userInfo",JSON.stringify(res))
       this.props.history.replace('/')
     }
 }
  render () {
    const user = JSON.parse(localStorage.getItem('userInfo'))
    if(user&&user.username){
      return <Redirect/>
    }
    return (
      <div className="login">
        <header className="login-header">
        <h1>qjLove管理后台</h1>
        </header>
        <section className="login-content">
         <h2>登陆</h2>
         <Form onFinish={this.onFinish}>
         <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
          {
            min: 3,
            message: '用户名必须大于3位'
          },
          {
            max: 12,
            message: '用户名必须小于12位'
          },
        ]}
      >
      <Input prefix={<UserOutlined  />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined  />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
      </Form>
        </section>
      </div>
    )
    
  }
   

}
export default Login
