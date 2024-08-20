import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Instructions = () => {
    const navigate = useNavigate()
  return (
    <>
    <Navbar/>
    <div className="container dark:bg-gray-800 mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-700  rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center dark:text-white text-gray-800">Quiz Instructions</h2>
        <p className="mb-4 text-gray-700 dark:text-white">
          Welcome to the CypherQuiz! Please read the following instructions carefully before you begin:
        </p>
        <ol className="list-decimal list-inside dark:text-white space-y-4 text-gray-700">
          <li>
            <strong>Login Required:</strong> You must log in with your email and password to access the quiz. If you don’t have an account, please sign up first.
          </li>
          <li>
            <strong>Camera and Microphone Access:</strong> After logging in, you will be prompted to allow access to your camera and microphone. This is necessary for monitoring purposes during the test. A preview of your camera feed will be displayed once permissions are granted. If permissions are denied, you will not be able to proceed with the quiz.
          </li>
          <li>
            <strong>MCQ Test Interface:</strong> The quiz consists of 10 multiple-choice questions. Read each question carefully and select the correct answer from the options provided. You can navigate between questions freely, and change your answers at any time before submitting the quiz. A camera window will remain visible on your screen during the quiz.
          </li>
          <li>
            <strong>Test Duration:</strong> The quiz do have a time limit, so it is recommended to complete it within a reasonable period.
          </li>
          <li>
            <strong>Submission:</strong> After answering all the questions, click the “Submit Test” button. You will be redirected to the "Finish Test" page, confirming your submission.
          </li>
          <li>
            <strong>Evaluation and Results:</strong> Your test will be evaluated automatically by our system every hour. The score will be calculated based on your answers and emailed to you using a predefined template. Please ensure that the email you use is correct to receive your results.
          </li>
          <li>
            <strong>Support:</strong> If you encounter any issues during the quiz, please contact our support team at [29jainprashuk@gmail.com].
          </li>
          <li>
            <strong>Good Luck!</strong> We wish you the best of luck with your quiz. Stay focused and do your best!
          </li>
        </ol>

        <div className='flex justify-center align-middle items-center'>
        <button
                  onClick={()=>(navigate('/home'))}
                  className="px-8 py-3 mt-2 text-lg font-semibold rounded bg-blue-400 text-gray-50 hover:bg-blue-600 transition"
                >
                  Back To Quiz
                </button>
        </div>
        
      </div>
      
    </div>
    </>
    
  );
};

export default Instructions;
