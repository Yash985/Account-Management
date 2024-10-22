/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DefaultUser = {
  name: "",
  email: "",
  password: "",
  confirmpwd: "",
};
const Signup = ({ users }) => {
  const [input, setInput] = useState(DefaultUser);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const inputValidation = () => {
    if (!input.email || !input.password || !input.confirmpwd || !input.name) {
      setError("Please Enter all the Credentials");
      return false;
    }
    if (input.password.length < 6) {
      setError("Password cannot be less than 6 characters");
      return false;
    }
    if (input.password !== input.confirmpwd) {
      setError("Password and Confirm Password do not match");
      return false;
    }
    const userExists = users.find((x) => x.email === input.email);
    if (userExists) {
      console.log("userExists", userExists);
      setError("This User Already Exists");
      return false;
    }
    setError("");
    return true;
  };
  const handleSubmit = () => {
    const success = inputValidation();
    if (!success) {
      return;
    }
    users.push({
      name: input.name,
      email: input.email,
      password: input.password,
    });
    navigate(`/profile/${input.email}`);
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => {
                    setInput({ ...input, name: e.target.value });
                  }}
                  value={input.name}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => {
                    setInput({ ...input, email: e.target.value });
                  }}
                  value={input.email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="user@email.com"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={input.password}
                  onChange={(e) => {
                    setInput({ ...input, password: e.target.value });
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirmpwd"
                  placeholder="confirm Password"
                  value={input.confirmpwd}
                  onChange={(e) => {
                    setInput({ ...input, confirmpwd: e.target.value });
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
                {error && (
                  <p className="text-sm text-red-600 pl-1 pt-1">{error}</p>
                )}
              </div>

              <div
                onClick={handleSubmit}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to={"/signin"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
