import React, { Component } from 'react';

import {Card,Select,Input,Button,Table} from 'antd'

const {Option} = Select
class ProductHome extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      product:[],
     };
  }
  initColumns = () => {
    this.columns = [
      {
        title: '商品名称',
        dataIndex: 'name'
      },
      {
        title: '商品描述',
        dataIndex: 'desc'
      },
      {
        title: '价格',
        dataIndex: 'price',
        render:(price) => '￥'+ price
      },
      {
        title:'状态',
        dataIndex: 'status',
        width: 80,
        render: (status) => {
          return(
            <span>
              <Button type='primary' size='small'>下架</Button>
              <span>在售</span>
            </span>
          )
        }
      },
      {
        title:'操作',
        width: 100,
        render: (product) => {
          return(
            <span>
              <Button type='primary' style={{border:'none'}} 
               ghost size="small"
               onClick={()=>{this.props.history.push('/product/detail')}}>详情</Button>
              <Button type='primary'
               style={{border:'none'}} 
               ghost size="small" 
               onClick={()=>{this.props.history.push('/product/update')}}>修改</Button>
            </span>
          )
        }
      }
    ]
  }
  UNSAFE_componentWillMount(){
    this.initColumns()
  }
  render() {
  //const {product} = this.state
  const product = [
    {
      key: '1',
      name: '胡彦斌',
      price: 32,
      desc: '西湖区湖底公园1号',
      status:'1'
    },
    {
      key: '2',
      name: '胡彦祖',
      price: 42,
      desc: '西湖区湖底公园1号',
      status:'1'
    },
  ];
   const title = (
     <div>
      <Select value='1' style={{width:150,marginRight:10}}>
        <Option value='1'>按名称搜索</Option>
        <Option value='2'>按描述搜索</Option>
      </Select>
      <Input style={{width:150,marginRight:10}} placeholder='关键字'></Input>
      <Button type='primary'>搜索</Button>
     </div>
   )
   const extra = (
     <Button type='primary'>
      添加商品
     </Button>
   )

    return (
      <Card title={title} extra={extra}>
       <Table
       bordered
       dataSource={product}
       columns={this.columns}
       >
       
       </Table>
      </Card>
    );
  }
}

export default ProductHome;