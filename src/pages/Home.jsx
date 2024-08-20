// Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Components/Sidebar";
import Main from "../Components/Main";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const requestMediaPermissions = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      console.log("Media permissions granted");
      setShow(true);
      return stream;
    } catch (error) {
      console.error("Error accessing media devices.", error);
      alert(
        "You need to grant permissions for camera and microphone access to proceed."
      );
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("https://cypher-test-backend.vercel.app/api/check", {
          method: 'GET',
          mode: 'no-cors',
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.error("Error fetching user data", error);
        setError("Failed to fetch user data");
        navigate("/signup");
      }
    };
    

    fetchUser();
  }, [navigate]);


  // console.log(user.name);

  return (
    <>
      {!show ? (
        <>
          <Header user={user} />
          <section className="flex-grow flex items-center justify-center bg-gray-100 dark:bg-gray-800 dark:text-gray-200">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-6xl">
              <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                Welcome to{" "}
                <span className="text-violet-600">CypherQuiz App</span>{" "}
              </h1>
              <p className="px-8 mt-8 mb-12 text-lg">
                the premier platform designed to assess candidates for
                Full-Stack roles at CypherSchool. Our tailored MCQ tests
                evaluate essential skills and knowledge required for success in
                a Full-Stack development position. Take on the challenge,
                showcase your expertise, and take a step closer to joining our
                team!
              </p>
              <div className="flex flex-wrap justify-center">
                <button
                  onClick={requestMediaPermissions}
                  // disabled={isStreaming}
                  className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-600 text-gray-50 hover:bg-violet-700 transition"
                >
                  Start Quiz
                </button>
                <button className="px-8 py-3 dark:text-white m-2 text-lg border rounded dark:text-gray-900 dark:border-gray-300 hover:bg-gray-200 transition"
                onClick={()=>(navigate('/instruction'))}>
                  Instructions
                </button>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="w-full">
          <Header user={user} />
          <div className="w-full lg:grid  grid-cols-8">
            <div className="col-span-6">
              <Main user={user} />
            </div>
            <div className="col-span-2">
              <Sidebar user={user} error={error} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
