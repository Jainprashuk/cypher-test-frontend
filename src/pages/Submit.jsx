import React from 'react';
import { useLocation } from 'react-router-dom';

const Submit = () => {
    const location = useLocation();
    const { responses, totalQuestions } = location.state;
    const attemptedQuestions = responses.answers.filter(answer => answer.selectedOption !== null).length;

    return (
        <div className="flex-grow p-6 flex flex-col items-center justify-center bg-gradient-to-r from-green-300 to-blue-300 min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Quiz Results</h1>
                <p className="text-lg font-semibold text-gray-700 mb-6">
                    You attempted <span className="text-green-600">{attemptedQuestions}</span> out of <span className="text-blue-600">{totalQuestions}</span> questions.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <p className="text-md text-gray-600">Your results are being processed. You will receive an email with your scores and further details within the next hour.</p>
                </div>
                <p className="text-md text-gray-600 mt-4">Thank you for participating!</p>
            </div>
        </div>
    );
};

export default Submit;
