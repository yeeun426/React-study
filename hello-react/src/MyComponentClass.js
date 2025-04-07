import React, { Component } from "react";

class MyComponentClass extends Component {
  // static react 컴포넌트에서 공통적으로 사용되는 값을 지정할 때 쓰임.
  static defaultProps = {
    name: "기본 이름",
  };
  render() {
    const { name } = this.props;
    return <div>{name}입니다.</div>;
  }
}

export default MyComponentClass;
