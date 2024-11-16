import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);
    setError();

    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        // setLoading(false);
        if (result.data === "success") {
          navigate("/home");
        } else {
          setError("Invalid email or password");
        }
      })
      .catch((err) => {
        // setLoading(false);
        setError("An error occurred. Please try again later.");
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>

        {error && <p className="mb-4 text-red-500">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
              required
              aria-label="Email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
              required
              aria-label="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 disabled:opacity-50"
          >
            login
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
