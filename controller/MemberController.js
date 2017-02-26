import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

class MemberController extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

module.exports = MemberController;
