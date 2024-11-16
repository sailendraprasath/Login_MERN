// src/Register.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, SetName] = useState();
  const [email, SetEmail] = useState();
  const [password, SetPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-black/50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              required
              onChange={(e) => SetEmail(e.target.value)}
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              required
              onChange={(e) => SetName(e.target.value)}
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              required
              onChange={(e) => SetPassword(e.target.value)}
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600">
            Register
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="/" className="text-indigo-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
