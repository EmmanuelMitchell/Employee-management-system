import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (res.data.success) {
        console.log("Login Successful:", res);
        logIn(res.data.user);
        localStorage.setItem("token", res.data.token);

        // Redirect based on user role
        navigate("/admin-dashboard");
        // if (res.data.user.role === "admin") {
        // } else {
        //   navigate("/user-dashboard"); // Assuming you might have a user dashboard
        // }
        setError(""); // Clear any previous errors
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        !error.response.data.success
      ) {
        setError(
          error.response.data.message || "Login failed. Please try again."
        );
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-teal-500 to-black">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md mt-16">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8">
          Employee Portal
        </h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Forgot Password?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Reset here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
