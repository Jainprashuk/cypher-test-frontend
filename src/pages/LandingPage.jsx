import React from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../Components/Navbar";

const LandingPage = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Navbar/>
      <div class="relative dark:bg-gray-800 overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div class="flex justify-center">
            <a
              class="inline-flex items-center gap-x-2 bg-white dark:bg-gray-900 dark:text-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300"
              href="#"
              onClick={()=>(navigate('/login'))}
            >
              Ace the Quiz, Join the Team
              <span class="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600">
                <svg
                  class="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>

          <div class="mt-5 max-w-2xl text-center mx-auto">
            <h1 class="block font-bold dark:text-white text-gray-800 text-4xl md:text-5xl lg:text-6xl">
             Welcome To 
              <span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                 &nbsp; CypherQuiz App
              </span>
            </h1>
          </div>

          <div class="mt-5 max-w-5xl text-center mx-auto">
            <p class="text-lg text-gray-600 dark:text-gray-300">
            the premier platform designed to assess candidates for Full-Stack roles at CypherSchool. Our tailored MCQ tests evaluate essential skills and knowledge required for success in a Full-Stack development position. Take on the challenge, showcase your expertise, and take a step closer to joining our team!
            </p>
          </div>

          <div class="mt-8 gap-3 flex justify-center">
            <a
              class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:from-violet-600 focus:to-blue-600 py-3 px-4"
              href="#"
              onClick={()=>(navigate('/login'))}
            >
              Login
              <svg
                class="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
            <button
              type="button"
              class="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              onClick={()=>(navigate('/signup'))}
            >
              Signup
              <span class="flex justify-center items-center bg-gray-200 rounded-md size-7">
              <svg
                class="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
              </span>
            </button>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
