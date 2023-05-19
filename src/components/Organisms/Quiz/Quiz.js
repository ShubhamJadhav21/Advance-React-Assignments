import React, { useState } from "react";
import { questionsData } from "../../QuestionData/QuestionData";
import style from "./Quiz.module.css";
import Button from "../../Atom/Button/Button";
import TestTimer from "../../Molecules/Timer/TestTimer";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showButton, setShowButton] = useState(false);

  const OptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const NextButton = () => {
    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
    setShowButton(false);
  };

  const PreviousButton = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      alert("You're on the first question!");
    }
  };

  const nextBtnStyle = {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "5rem",
    borderRadius: "0.2rem",
    border: "none",
    height: "2rem",
    color: "white",
    background: "#fe2231",
  };

  const previousBtnStyle = {
    ...nextBtnStyle,
    position: "absolute",
    left: 0,
    background: "rgb(46, 121, 219)",
  };

  const submitBtnStyle = {
    ...nextBtnStyle,
  };

  return (
    <div className={style.quizWrapper}>
      <TestTimer />

      <div className={style.question}>
        <span>{currentQuestion + 1}.</span>
        <span>{questionsData[currentQuestion].Question}</span>
      </div>

      {currentQuestion > 0 && (
        <Button
          text="Previous"
          onClick={PreviousButton}
          style={previousBtnStyle}
          className={style.btnPrevious}
        />
      )}

      {currentQuestion === questionsData.length - 1 ? (
        <Button
          text="Submit"
          style={submitBtnStyle}
          className={style.btnSubmit}
        />
      ) : (
        <Button
          text="Next"
          onClick={NextButton}
          style={nextBtnStyle}
          className={style.btnNext}
        />
      )}

      {questionsData[currentQuestion].Options.map((option, index) => (
        <div key={index} className={style.option}>
          <input
            type="radio"
            id={index}
            value={option}
            checked={selectedOption === option}
            onChange={OptionChange}
            className={style.question}
          />
          <label htmlFor={index}>{option}</label>
        </div>
      ))}
    </div>
  );
}
