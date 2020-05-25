import React, { Component } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'

import { Layout} from 'antd'

import LeftNav from '../../components/left-nav/left-nav'
import Header from '../../components/header/header'
import Home from '../../pages/home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Line from '../chart/line'
import Bar from '../chart/bar'



const { Footer, Sider, Content } = Layout;


class Admin extends Component {

  render() {
    const user = JSON.parse(localStorage.getItem("userInfo"))
    if(!user){
      return <Redirect to="/login"/>
    }
    return (
      <Layout style={{height:'100%'}}>
      <Sider>
        <LeftNav></LeftNav>
      </Sider>
      <Layout>
        <Header></Header>
        <Content style={{backgroundColor:'#fff',margin: 20}}>
              <Switch>
              <Route path='/home' component={Home}/>
              <Route path='/category' component={Category}/>
              <Route path='/product' component={Product}/>
              <Route path='/role' component={Role}/>
              <Route path='/user' component={User}/>
              <Route path='/chart/line' component={Line}/>
              <Route path='/chart/bar' component={Bar}/>
              <Redirect to='/home'/>
              </Switch> 
        </Content>
        <Footer style={{textAlign:'center'}}>Footer</Footer>
      </Layout>
    </Layout>
    )
  }
}

export default Admin;