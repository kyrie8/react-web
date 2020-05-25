import React, { Component } from 'react'
import '../left-nav/left-nav.css'
import {Link,withRouter} from 'react-router-dom'
import menuList from '../../config/menuConfig'
import { Menu} from 'antd';
const { SubMenu } = Menu;
class LeftNav extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }
  getMenuNodes = (menuList) => {
    return menuList.map(item => {
      if(!item.children){
        return (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.key}>{item.title}</Link>
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {this.getMenuNodes(item.children)}
          </SubMenu>
        )
      }
    })
  }
  render() {
    const path = this.props.location.pathname

    return (
      <div className="left-nav">
        <Link to='/' className="left-header">
          <h1>管理后台</h1>
        </Link>
        <Menu
          selectedKeys={[path]}
          defaultOpenKeys={['/product']}
          mode="inline"
          theme="dark"
          className="left-menu"
        >
        {this.getMenuNodes(menuList)}
        </Menu>
      </div>
      
    )
  }

 
}

export default withRouter(LeftNav)