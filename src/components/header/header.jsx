import React, { Component } from 'react'
import '../header/header.css'
import {withRouter} from 'react-router-dom'
import {renderTime} from '../../utils/time'
import menuList from '../../config/menuConfig'
import { Modal,Button} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      currentTime: renderTime(Date.now())
     }
  }
  getTime = () => {
    this.timeId = setInterval(() => {
      const currentTime = renderTime(Date.now())
      this.setState({currentTime})
    },1000)
  }
  getTitle = ()=>{
    const path = this.props.location.pathname
    let title
    menuList.forEach(item => {
      if (item.key === path) {
        title = item.title
      }else if(item.children){
        const cItem = item.children.find(cItem => cItem.key === path)
        if(cItem){
          title = cItem.title
        }
      }
      })
      return title
  }
  componentDidMount () {
    this.getTime()
  }
  componentWillUnmount () {
    clearInterval(this.timeId)
  }
  
  logout = () => {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: '确认退出',
      okText: '确认',
      cancelText: '取消',
      onOk:() =>{
        localStorage.removeItem("userInfo")
        this.props.history.replace('/login')
      }
    }) 
  }

  render() {
    const user = JSON.parse(localStorage.getItem("userInfo"))
    const title = this.getTitle()
    return (
      <div className="header">
        <div className="header-top">
          <span>欢迎,{user.username}</span>
           <Button type="primary" onClick={this.logout}>
           退出
           </Button>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">
           {title}
          </div>
          <div className="header-bottom-right">
           <span>{this.state.currentTime}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)