import React, { useState } from "react";

const AccountCreation = () => {
  // State for username input
  const [username, setUsername] = useState("");

  // State for password input
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const submitForm = (e) => {
    // Dummy request handling logic
    e.preventDefault();
    console.log(
      "Submitting form with username:",
      username,
      "and password:",
      password
    );
    setUsername("");
    setPassword("");
    alert("Account created successfully");
  };

  return (
    <div className="sm:w-[300px] relative p-4 flex flex-col justify-center m-auto border-2 mt-14 w-[400px] h-[300px] ring-2 ring-gray-300">
      <form onSubmit={submitForm}>
        <div className="flex flex-col justify-center m-auto w-fit ">
          <div className="flex justify-center">
            <h1 className="font-bold text-blue-700 text-3xl mb-10">
              Create Account
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            {/* Username input field */}
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter Username"
              className="mb-5 border-2 border-gray-300 rounded-md bg-gray-100 outline-none w-fit h-[40px] pl-2 sm:w-[200px]"
            />
            {/* Password input field */}
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter Password"
              className="mb-6 border-2 border-gray-300 rounded-md w-fit h-[40px] bg-gray-100 outline-none pl-2 sm:w-[200px]"
            />
          </div>
          <div className="flex justify-center">
            {/* Submit button */}
            <button
              type="submit"
              className="text-sm border-2 border-blue-700 rounded-lg w-[100px] h-[40px] bg-gradient-to-r from-cyan-500 to-blue-500 text-white sm:w-[80px]"
            >
              SIGN UP
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountCreation;
