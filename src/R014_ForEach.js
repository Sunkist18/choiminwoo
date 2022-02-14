import React, { Component } from "react";

export default class R014_ForEach extends Component {
  componentDidMount() {
    var old_array = [1, 2, 3, 4];
    var new_array = [];
    for (let index = 0; index < old_array.length; index++) {
      const element = old_array[index];
      new_array.push(element);
    }
    console.log(`1. for new_array : ${new_array}`);

    var new_each_array = [];
    old_array.forEach((element) => {
      new_each_array.push(element);
    });
    console.log(`2. for new_each_array : ${new_each_array}`);
  }
  render() {
    return <h2>[THIS IS FOREACH]</h2>;
  }
}
