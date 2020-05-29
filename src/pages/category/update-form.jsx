import React, { Component } from 'react';
import { Form, Input} from 'antd';
class UpdateFrom extends Component {
  onFieldsChange= (changedFields,allFields) => {
    this.form = allFields[0].value
    //console.log(allFields[0].value)
    //console.log(changedFields)
    this.props.setForm(this.form)
  }
  formRef = React.createRef() //获取form的dom
  
  onFill = () =>{
    this.formRef.current.setFieldsValue({
      name:this.props.name
    })//重置表单字段
  }
  componentDidUpdate(){
    this.onFill()
  }

  render() {
    return (
      <Form onFieldsChange={this.onFieldsChange}
        ref = {this.formRef}>
       <Form.Item name="name" initialValue={this.props.name}>
         {
          <Input ></Input>
         }
       </Form.Item>
      </Form>
    )
  }
}

export default UpdateFrom