import React from 'react'
import { MailOutlined, AppstoreOutlined,LineChartOutlined, GiftOutlined,GoldOutlined,UserOutlined,UserSwitchOutlined,BarChartOutlined,AreaChartOutlined } from '@ant-design/icons';
const menuList = [
  {
    title: '首页',
    key: '/home',
    icon: <MailOutlined/>
  },
  {
    title: '商品',
    key: '/product',
    icon: <AppstoreOutlined/>,
    children: [
      {
        title: '品类管理',
        key: '/category',
        icon:<GiftOutlined />
      },
      {
        title:'商品管理',
        key: '/product',
        icon: <GoldOutlined />
      }
    ]
  },
  {
    title: '用户管理',
    key: '/user',
    icon: <UserOutlined />
  },
  {
    title: '角色管理',
    key: '/role',
    icon:<UserSwitchOutlined />
  },
  {
    title: '图形图表',
    key: '/charts',
    icon: <AreaChartOutlined />,
    children: [
      {
        title: '柱形图',
        key: '/chart/bar',
        icon: <BarChartOutlined />
      },
      {
        title: '折线图',
        key: '/chart/line',
        icon: <LineChartOutlined />
      }
    ]
  },
]

export default menuList