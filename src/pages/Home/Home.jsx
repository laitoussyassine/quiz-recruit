import React, { useState } from 'react';
import Categories from '../../Data/Categories'
import ErrorMessage from '../../components/ErroeMessage/ErrorMessage';
import { useNavigate  } from 'react-router-dom';

const Home = function({name, setName, fetchQuestions, category, setCategory}) {    
   
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const handleButtonClick = () => {
        if (!category || !name) {
            setError(true);
            return;
        } else {
            setError(false);
            fetchQuestions(category);
            navigate('/quiz');
        }
      };
  return (
    <div className='quiz-container flex flex-col items-center justify-center gap-2'>
            <span>Quiz Settings</span>
        <div className='flex flex-col items-center justify-center gap-2'>
            {error && <ErrorMessage>Please FIll All fields</ErrorMessage>}
            <input className='border-2	border-purple-900' placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} />
            <div className="flex items-center justify-center ">
                <select
                    onChange={(e) => setCategory(e.target.value)}
                    value={category} // Use the value prop here
                    className="border-2 border-purple-900 bg-purple-900 text-white select select-info w-full max-w-xs rounded-md px-8 py-2 focus:outline-none focus:border-transparent"
                    >
                    <option disabled value="">Select Your Job</option>
                    {Categories.map((cat) => (
                        <option key={cat.category} value={cat.value}>
                        {cat.category}
                        </option>
                    ))}
                </select>

                </div>
                <button onClick={handleButtonClick} className='border-2	border-purple-900'>TAKE A QUIZ</button>
        </div>
    </div>
  )
}
export default Home;
