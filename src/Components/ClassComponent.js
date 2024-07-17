import React, { Component } from "react";

export default class ClassComponent extends Component {
  state = {
    name: "Sunil Machani",
    age: 20,
  };

  render() {
    return <div>Class Component {this.state.name}</div>;
  }
}
