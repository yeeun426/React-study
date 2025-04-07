import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };

  // [ bind ] 는 html로 마크업되는 과정에서 임의 메서드가 this와 연결이 끊어진다
  // 그래서 끊어지지 않고 컴포넌트 스스로를 가르키기 위해서 바인딩 해주는 작업업

  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // 미리 임의의 함수 선언해서 사용하는 방법
  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
