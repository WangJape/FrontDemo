import React from 'react';
import { Button } from 'antd';


export default class ReduxDemo extends React.Component {

  doSet = e => {
    console.log(e)
  }

  render() {
    return (
      <Button type="primary" onClick={ this.doSet }>设置</Button>
    )
  }
}