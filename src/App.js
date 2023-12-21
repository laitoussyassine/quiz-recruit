import './App.css';
import React, { useState } from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';

function App() { 
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const fetchQuestions = () => {}
  return (
      <div>
        <Routes>
          <Route  path="/" exact element={<Home name={name} setName={setName} category={category} setCategory={setCategory} fetchQuestions={fetchQuestions}/>} />
          <Route path="/quiz" exact element={<Quiz category={category} setCategory={setCategory}/>} />
          <Route path="/result" exact element={<Result/>} />=
        </Routes>
      </div>
  );
}
export default App;
