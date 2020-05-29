import React, { Component } from 'react';
import { Form, Input,Select} from 'antd';
import $http from '../../api/http'
const { Option } = Select
class AddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listItem:[],
      addId:''
    }
  }

  getCategory = async()=>{
    const res = await $http.get('/category')
    const list = res.Category.map((item)=> 
      <Option key={item._id}>{item.name}</Option>
    )
    this.setState({
      listItem:list
    })
  }
  
  componentDidMount(){
      this.getCategory()
    }
    handleChange =(value) => {
      this.setState({
        addId:value
      })
    }
    onFieldsChange= (changedFields,allFields) => {
      
      //console.log(allFields[0].value)
      this.props.addForm(this.state.addId,allFields[0].value)
    }
  render() {
    
    return (
      <Form ref={this.formRef} onFieldsChange={this.onFieldsChange}>
      <Form.Item>
       <Select allowClear={true}
        placeholder="请选择分类"
       onChange={this.handleChange}>
       {this.state.listItem}
       </Select>
       </Form.Item>
       <Form.Item placeholder=''>
         <Input allowClear={true}></Input>
       </Form.Item>
      </Form>
    )
  }
}

export default AddForm