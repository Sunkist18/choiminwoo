import React, { Component } from 'react';

export default class Props extends Component {
  render() {
    let {
      String
    } = this.props;
    return (      
      <div style={{padding: "0px"}}>
        <p>{String}</p>
      </div>
    )
  }
}

Props.defaultProps = {
  String: "기본 값",
}