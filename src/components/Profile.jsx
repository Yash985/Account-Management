/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Profile = ({ users }) => {
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const param = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const userExist = users.find((x) => x.email == param.email);
    setUser(userExist);
  }, []);

  const handleSubmit = () => {
    if (!edit) return;
    const updatedUser = users.find((x) => {
      if (x.email == param.email) {
        x.password = user.password;
        x.name = user.name;
        return x;
      }
    });
    setUser(updatedUser);
  };
  if (!user) {
    return (
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <p className="text-3xl text-white mb-4 ">User not SignedIn</p>
        <div
          onClick={() => navigate("/signup")}
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Signup
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Profile
            </h1>
            <div className="flex gap-3 items-center justify-between">
              <img
                className="w-16 h-16 rounded-full"
                src="https://avatar.iran.liara.run/public"
              />
              <div
                onClick={() => {
                  navigate("/signin")
                }}
                className="h-10 text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 text-center"
              >
                Logout
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {edit ? "Enter your new name" : "Your Name"}
              </label>
              <input
                type="text"
                name="name"
                value={user?.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className={`bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  ${
                  edit ? "bg-gray-700" : "bg-gray-900"
                } ${edit ? "border-slate-400" : "border-none"}`}
                placeholder="John Doe"
                disabled={!edit}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <div
                onClick={() => alert("user email cannot be changed")}
                className={`border  text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none bg-gray-900`}
              >
                {user?.email}
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {edit ? "Enter your new password" : "Password"}
              </label>
              <input
                type="password"
                name="password"
                value={user?.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="••••••••"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  ${
                  edit ? "bg-gray-700" : "bg-gray-900"
                } ${edit ? "border-slate-400" : "border-none"} `}
                disabled={!edit}
              />
            </div>

            <div
              onClick={() => {
                setEdit((p) => !p);
                handleSubmit();
              }}
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {edit ? "Save" : "Edit your profile"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
