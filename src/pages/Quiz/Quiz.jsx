import React, { useRef, useState } from "react";
import {data} from '../../Data/data'
import './Quiz.css';
import { useNavigate  } from 'react-router-dom';

const Quiz = (props) => {
  let [index, setIndex] = useState(0);

  let [questions, setQuestions] = useState(data.filter((question) => {
    console.log(props.category,question.category, props.category === question.category);
    
      return props.category === question.category
    }));
  let [question, setQuestion] = useState(questions[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  console.log(questions);

    
  let optionArray = [Option1,Option2,Option3,Option4];

  const checkAns = (e,ans) => {
    if (index === questions.length-1) {
      setResult(true);
      return 0;
    }
    if(lock === false) {
      if (question.ans===ans) {
          e.target.classList.add("correct");
          setLock(true);
          setScore(prev=>prev+1);
        } else {
          e.target.classList.add("wrong");
          setLock(true);
          optionArray[question.ans-1].current.classList.add("correct");
        }
      } else {

      }
  }
  const next = () => {
      if (lock===true) {
        setIndex(++index);
        setQuestion(questions[index]);
        setLock(false);
        optionArray.map((option) => {
          option.current.classList.remove("correct")
          option.current.classList.remove("wrong")
        })
      }
  }
  const navigate = useNavigate()

  const   reset = () => {
    navigate('/')
  }

  return (
    <div className="container">
      <h1 >Quiz App</h1>
      <hr />
      {result?<></>:<><div className="index">{index+1} of {questions.length} Questions</div>
      <h2>{index+1}. {question.question} ?</h2>
      <ul>
        <li ref={Option1} onClick={(e) => {checkAns(e,1)}}>{question.option1}</li>
        <li ref={Option2} onClick={(e) => {checkAns(e,2)}}>{question.option2}</li>
        <li ref={Option3} onClick={(e) => {checkAns(e,3)}}>{question.option3}</li>
        <li ref={Option4} onClick={(e) => {checkAns(e,4)}}>{question.option4}</li>
      </ul>
      <button onClick={next} className="index">Next</button></>}
      {result?<><h2>You Scored {score} out of {questions.length} </h2>
      <button onClick={reset}>Reset</button></>:<></>}
    </div>
  )
}
export default Quiz