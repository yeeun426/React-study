import React, { Component } from "react";
// state 컴포넌트 내부에서 바뀔 수 있는 값을 의미
// props는 부모요소가 설정하는 값을 사용. 읽기만 가능

class Counter extends Component {
  //   constructor(props) {
  //     super(props);
  //     // state 초깃값 설정하기
  //     this.state = {
  //       number: 0,
  //       fixednumber: 0,
  //     };
  //   }

  state = {
    number: 0,
    fixednumber: 0,
  };

  render() {
    const { number, fixednumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>{fixednumber}</h2>
        <button
          onClick={() => {
            //this.setState를 사용해서 state에 새로운 값을 넣을 수 있다.
            this.setState({ number: number + 1 }, () => {
              console.log("방금 setState가 호출되었습니다.");
              // 함수 동작 확인할때 실제로 콘솔 찍어봅니다.
              console.log(this.state);
              // 함수 동작 확인되고 값이 변하게 확인이 필요할 때
            });
            // this.setState({ number: this.state.number + 1 });
            // 인자를 함수방식으로 넣는 방법 1
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            // 위 코드와 아래 코드는 완전히 똑같은 기능을 수행한다
            // 아래 코드는 함수에서 바로 객체를 반환한다는 것입니다.
            // 인자를 함수방식으로 넣는 방법 2 권장 방식
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
