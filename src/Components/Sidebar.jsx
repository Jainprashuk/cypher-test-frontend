// Sidebar.jsx
import React, { useEffect, useRef, useState } from "react";

const Sidebar = ({ user, error }) => {
  const videoRef = useRef(null);
  const [isStreaming, setIsStreaming] = useState(false);

  const requestMediaPermissions = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      console.log("Media permissions granted");
      setIsStreaming(true);

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      return stream;
    } catch (error) {
      console.error("Error accessing media devices.", error);
      alert(
        "You need to grant permissions for camera and microphone access to proceed."
      );
      setIsStreaming(false);
    }
  };

  useEffect(() => {
    requestMediaPermissions();

    // Cleanup function to stop the video stream
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        stream.getTracks().forEach((track) => track.stop());
        setIsStreaming(false);
      }
    };
  }, []);

  return (
    <div className=" p-2 pt-8  dark:bg-gray-800  flex flex-col bg-white items-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 dark:text-white">User Details</h1>
      {user ? (
        <div className="bg-gray-200 text-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-lg mb-2">
            <strong className="font-medium">Name:</strong> {user.name}
          </p>
          <p className="text-lg mb-4">
            <strong className="font-medium">Email:</strong> {user.email}
          </p>
          {/* Display other user information as needed */}
        </div>
      ) : (
        error && <p className="text-red-600 text-lg mt-4">{error}</p>
      )}
      <video
        ref={videoRef}
        autoPlay
        muted
        className="mt-6 border-4 border-gray-300 rounded-lg shadow-md w-full max-w-3xl max-h-96"
      ></video>
    </div>
  );
};

export default Sidebar;
