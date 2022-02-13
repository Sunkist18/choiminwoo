import React, { Component } from 'react'

export default class R011_SpreadOperator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var varArray1 = ['num1', 'num2', 'num3'];
    var varArray2 = ['num4', 'num5', 'num6'];
    var sumArray = [varArray1[0], varArray1[1], varArray1[2], varArray2[0], varArray2[1], varArray2[2]];
    console.log('1. sumArray : ' + sumArray);
    let sumLetArr = [...varArray1, ...varArray2];
    console.log('2. sumLetArr : ' + sumLetArr);
    const [sum1, sum2, ...remain] = sumLetArr;
    console.log('3. sum1 : ' + sum1, 'sum2 : ' + sum2, 'remain : ' + remain);

    var varObj1 = {
      key1: 'value1',
      key2: 'value2',
    };
    var varObj2 = {
      key2: 'new2',
      key3: 'value3',
    };
    var sumVarObj = Object.assign({}, varObj1, varObj2);
    console.log('4. sumVarObj : ' + JSON.stringify(sumVarObj));
    let sumLetObj = {...varObj1, ...varObj2};
    console.log('5. sumLetObj : ' + JSON.stringify(sumLetObj));
    var {key1, key3, ...others} = sumLetObj;
    console.log('6. key1 : ' + key1, 'key3: ' + key3, 'others : ' + JSON.stringify(others));
  }
  render() {
    return (
      <h2>[THIS IS SpreadOperator]</h2>
    )
  }
}