import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [redirectToChatbot, setRedirectToChatbot] = useState(false);
  const [error, setError] = useState(""); // State for error message

  const defaultUser = {
    Username: "user123",
    Password: "pass123",
  };

  const init = {
    Username: "",
    Password: "",
  };

  const [user, setUser] = useState(init);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.Username === defaultUser.Username &&
      user.Password === defaultUser.Password
    ) {
      setRedirectToChatbot(true);
    } else {
      if (user.Username !== defaultUser.Username) {
        setError("Username is wrong.");
      } else if (user.Password !== defaultUser.Password) {
        setError("Password is wrong.");
      } else {
        setError("Invalid username or password.");
      }
    }
  };

  if (redirectToChatbot) {
    return <Navigate to={"/chatbotpage"} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50">
      <div className="w-full max-w-4xl flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden">
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-white p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Log in</h1>
          <button className="w-full py-2 px-4 mb-4 border border-gray-300 flex items-center justify-center rounded-md hover:bg-gray-100">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="h-5 w-5 mr-3"
            />
            Continue with Google
          </button>
          <button className="w-full py-2 px-4 mb-4 border border-gray-300 flex items-center justify-center rounded-md hover:bg-gray-100">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
              className="h-5 w-5 mr-3"
            />
            Continue with GitHub
          </button>
          <div className="flex items-center my-4">
            <hr className="w-full border-gray-300" />
            <span className="px-3 text-gray-500">OR</span>
            <hr className="w-full border-gray-300" />
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="Username"
                placeholder="Email"
                value={user.Username}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {error.includes("Username") && (
                <span className="text-red-600 text-sm mt-1">{error}</span>
              )}
            </div>
            <div>
              <input
                type="password"
                name="Password"
                placeholder="Password"
                value={user.Password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {error.includes("Password") && (
                <span className="text-red-600 text-sm mt-1">{error}</span>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-purple-600 text-white rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Log in
            </button>
            <div className="text-right mt-2">
              <a href="#" className="text-purple-600 hover:underline">
                Forgot password?
              </a>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p>
              Don’t have an account?{" "}
              <a href="#" className="text-purple-600 hover:underline">
                Sign up now
              </a>
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center ">
          <div>
            <img
              src="/banner.png"
              alt="Product demo"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
