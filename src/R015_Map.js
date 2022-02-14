import React, { Component } from "react";

export default class R015_Map extends Component {
  componentDidMount() {
    var map_arr = [3, 2, 8, 8];
    let new_map_arr = map_arr.map((x) => x);
    console.log(`new map arr : [${new_map_arr}]`);

    let multi_arr = map_arr.map((x) => x * 2);
    console.log(`2. new multi map arr : [${multi_arr}]`);
    var obj_array = [
      { key: "react", value: "200" },
      { key: "리액트", value: "2!!" },
    ];
    let mul_array = obj_array.map((obj, index) => {
      console.log(index + 3 + ". obj : " + JSON.stringify(obj));
      var Obj = {};
      Obj[obj.key] = obj.value;
      return Obj;
    });
    console.log(`5. Map_objArr : [${JSON.stringify(mul_array)}]`);
  }
  render() {
    return <h2>[THIS IS MAP]</h2>;
  }
}
