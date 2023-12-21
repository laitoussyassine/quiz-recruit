import { useState } from "react";

// import React, { useState } from 'react';
export default function Questions() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const  [showScore, setShowScore] = useState(false)
    const hadnleAnswerButtonClick = (isCorrect) => {
        if(isCorrect === true) {
            
        }
        const nextQuestion  = currentQuestion +1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true)
        }
    }
	return (
		<div className='bg-slate-600 text-white	 flex items-center justify-around'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>You scored 1 out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question 1</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section flex flex-col gap-4'>
						
						{questions[currentQuestion].answerOptions.map((answerOption) => 
                        <button onClick={ ()=>hadnleAnswerButtonClick(answerOption.isCorrect)} className="bg-blue-500 text-white p-4 rounded-md hover:bg-purple-700">{answerOption.answerText}</button> )}
					</div>
				</>
			)}
		</div>
	);
}
