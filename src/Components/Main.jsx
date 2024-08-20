import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Main = ({ user }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [responses, setResponses] = useState({
    user: user,
    answers: [],
  });
  const [timer, settimer] = useState(120);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('https://cypher-test-backend.vercel.app/questions');
        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.log('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    const countdown = setTimeout(() => {
      settimer(timer - 1);
      if (timer === 0) {
        handleSubmitQuiz();
      }
    }, 1000);

    return () => clearTimeout(countdown);
  }, [timer]);

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      const newResponses = [...responses.answers];
      newResponses[currentQuestionIndex] = {
        q_id: questions[currentQuestionIndex]._id,
        question: questions[currentQuestionIndex].question,
        selectedOption,
      };
      setResponses({ ...responses, answers: newResponses });

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
      }
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(
        responses.answers[currentQuestionIndex - 1]?.selectedOption || null
      );
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} min ${remainingSeconds < 10 ? '0' : ''}${remainingSeconds} sec`;
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitQuiz = async () => {
    let updatedResponses = [...responses.answers];
    if (selectedOption !== null) {
      updatedResponses[currentQuestionIndex] = {
        q_id: questions[currentQuestionIndex]._id,
        question: questions[currentQuestionIndex].question,
        selectedOption,
      };
    }

    try {
      await fetch('https://cypher-quiz-backend.vercel.app/api/submit-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: user._id, answers: updatedResponses }),
      });

      navigate('/submit', {
        state: {
          responses: { ...responses, answers: [...updatedResponses] },
          totalQuestions: questions.length,
        },
      });
    } catch (error) {
      console.error('Failed to submit quiz:', error);
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex-grow p-4 flex flex-col  items-center dark:bg-gray-800  border-r-2 border-gray-400">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Quiz App</h1>
      <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-4 dark:text-white text-gray-900">
            {currentQuestion.question}
          </h2>
          <p className="animate-pulse dark:text-white"> {formatTime(timer)}</p>
        </div>
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <label
              key={index}
              className="flex  items-center p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-200 dark:hover:bg-gray-600  "
            >
              <input
                type="radio"
                name="quiz-option"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-3 text-gray-900 dark:text-white hover:text-gray-600">
                {option}
              </span>
            </label>
          ))}
        </div>
        <div className="mt-6 flex justify-between">
          <button
            onClick={handlePrevQuestion}
            disabled={currentQuestionIndex === 0}
            className="px-5 py-3 bg-blue-500 text-white rounded-md disabled:bg-gray-400 transition-colors hover:bg-blue-600"
          >
            Previous
          </button>
          {currentQuestionIndex < questions.length - 1 ? (
            <button
              onClick={handleNextQuestion}
              disabled={selectedOption === null}
              className="px-5 py-3 bg-blue-500 text-white rounded-md disabled:bg-gray-400 transition-colors hover:bg-blue-600"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmitQuiz}
              disabled={selectedOption === null}
              className="px-5 py-3 bg-green-500 text-white rounded-md disabled:bg-gray-400 transition-colors hover:bg-green-600"
            >
              Submit Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
