import React, { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import app from "./css/App.module.css";

const App = () => {
  const choice = [
    { name: "가위", value: "scissors" },
    { name: "바위", value: "rock" },
    { name: "보", value: "paper" },
  ];
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("초기값");

  const handleUserChoice = (userSelector) => {
    const computerSelect = generateComputerChoice();
    const gameResult = determineWinner(userSelector, computerSelect);
    setResult(gameResult);
    setComputerChoice(computerSelect);
    setUserChoice(userSelector);
  };

  const play = (userSelector, computerSelect) => {
    setComputerChoice(computerSelect);
    setUserChoice(userSelector);
  };

  const generateComputerChoice = () => {
    const computerSelect = randomSelect();
    return computerSelect.name;
  };

  const randomSelect = () => {
    const randomIndex = Math.round(Math.random() * 2);
    return choice[randomIndex];
  };

  const determineWinner = (user, computer) => {
    if (user === computer) return "비겼다";
    if (
      (user === "가위" && computer === "보") ||
      (user === "바위" && computer === "가위") ||
      (user === "보" && computer === "바위")
    )
      return "이겼다";
    return "졌다";
  };

  return (
    <>
      <h1 className={app.hd}>가위바위보 게임</h1>
      <div className={app.container}>
        <Card
          userTitle="너님"
          choice={choice}
          result={result}
          type={userChoice}
        />
        <Button onClick={handleUserChoice} choice={choice} result={result} />
        <Card
          userTitle="상대선수"
          choice={choice}
          result={result}
          type={computerChoice}
        />
      </div>
      <p>
        버튼을 클릭하여 가위, 바위, 보 중 하나를 선택하세요.
        <br />
        컴퓨터는 랜덤으로 선택합니다.
      </p>
    </>
  );
};

export default App;
