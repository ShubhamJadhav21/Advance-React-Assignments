import React, { useState } from 'react';
import style from './Admin.module.css';

const Admin = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [addQuestions, setAddQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleOptionChange = (event, index) => {
    const updatedOptions = [...options];
    updatedOptions[index] = event.target.value;
    setOptions(updatedOptions);
  };

  const handleCorrectAnswerChange = (event) => {
    setCorrectAnswer(event.target.value);
  };

  const handleAttachmentChange = (event) => {
    const files = event.target.files;
    const updatedAttachments = [...attachments];
    updatedAttachments.push(...files);
    setAttachments(updatedAttachments);
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      question,
      options,
      correctAnswer,
      attachments,
    };

    if (question !== '') {
      setAddQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
      
      setQuestion('');
      setOptions(['', '', '', '']);
      setCorrectAnswer('');
      setAttachments([]);
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  return (
    <div className={style.wrapper}>
      <h1>Admin Panel</h1>
      <div className={style.question}>
        <input
          type="text"
          value={question}
          placeholder="Add Question Here"
          onChange={handleQuestionChange}
        />
      </div>
      <div>
        <label>Options:</label>
        {options.map((option, index) => (
          <input
            className={style.options}
            key={index}
            type="text"
            value={option}
            onChange={(event) => handleOptionChange(event, index)}
          />
        ))}
      </div>
      <div>
        <label>Correct Answer:</label>
        <select value={correctAnswer} onChange={handleCorrectAnswerChange}>
          <option value="">Select correct answer</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Attachments:</label>
        <input type="file" multiple onChange={handleAttachmentChange} />
      </div>
      <button onClick={handleAddQuestion}>Add Question</button>
      <h2>Added Questions:</h2>
      <ul>
        {addQuestions.map((question, index) => (
          <li key={index}>
            <p>
            QuestionNo:-<span>{currentQuestion}</span>: {question.question}
            </p>
            <p>Options: {question.options.join(', ')}</p>
            <p>Correct Answer: {question.correctAnswer}</p>
            <p>Attachments: {question.attachments.length}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
