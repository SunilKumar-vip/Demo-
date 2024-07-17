import React, { Component } from "react";

export default class ClassComponent extends Component {
  state = {
    name: "Sunil",
    age: 20,
  };

  render() {
    return <div>Class Component {this.state.name}</div>;
  }
}
