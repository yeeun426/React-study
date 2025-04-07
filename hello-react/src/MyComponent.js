import React from "react";
// import PropTypes from "prop-types"; -> 클래스 방식에서도 사용 안됨

//props 는 properties 의 줄인 말 이다 컴포넌트 속성을 설정할 때 사용하는 요소
const MyComponent = ({ name = "진짜 리액트", children }) => {
  //   const { name, children } = props;
  return (
    <div>
      <h1>나의 새롭고 멋진 {name} 컴퍼넌트</h1>
      <h2>children 값은 {children}입니다</h2>
    </div>
  );
};

//교재의 예전 방식의 defaultProps은 함수방식에서 더 이상 쓰이지 않음. 지원 안됨
//<div>나의 멋지고 새로운 {props.name || "하이" }</div> 방법 -1
//const MyComponent = ({ name = "하이", children }) => 비구조화 할당 방법 -2

// MyComponent.defaultProps = {
//   name: "기본 이름",
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
// };

// 위의 두 가지는 필수일까요? => 필수는 아닙니다. [참고] TypeScript 지원해주는 기능이 있다.

export default MyComponent;
