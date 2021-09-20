import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { apiLogin } from "../../state/userAction";
import { useUser } from "../../state/userAction/hooks";
import * as yup from "yup";

import Logo from "../../Images/logoBook.png";
import PictureStore from "./component/bookStore.jpg";

export default function LoginPage() {
  const { handleLogin } = useUser();
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    email: yup.string().required("Please enter the required field").email(),
    password: yup
      .string()
      .required("Please enter the required field")
      .matches(/^[aA-zZ0-9\s]+$/, "Only alphabets are allowed for this field ")
      .min(8),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const history = useHistory();

  const nextStepClick = () => {
    history.push("/login");
  };
  const onSubmit = (data) => {
    handleLogin(data);
    console.log(errors);
    // nextStepClick();
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-row justify-center items-center w-9/12 h-5/6 shadow-2xl">
        <img
          src={PictureStore}
          className="hidden 2xl:block w-full h-full bg-gray-500 rounded-l-lg shadow-md"
          alt="IMG"
        />
        <div className="w-96 h-96 sm:w-full sm:h-full p-8 sm:p-0 rounded-lg shadow-md 2xl:rounded-l-none bg-gradient-to-b from-yellow-500 to-yellow-300">
          <div className="flex flex-col items-center mt-20">
            <img src={Logo} className="w-40 mt-14 mb-5" alt="IMG" />
            <form
              className="w-80 mt-2"
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col text-base"> E-mail</div>
              <input
                className="w-full p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none mt-2"
                type="email"
                placeholder="tttt@tttt.com"
                {...register("email")}
              />
              {errors?.email && (
                <div className="text-red-600 text-sm">
                  * {errors.email.message}
                </div>
              )}
              <div className="flex flex-col text-base mt-4"> Password</div>
              <input
                className="w-full mt-2 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              {errors?.password && (
                <div className="fixed text-red-600 text-sm">
                  * {errors.password.message}
                </div>
              )}

              <button
                className="bg-blue-700 p-2 mt-4 w-full text-white rounded-lg focus:outline-none hover:bg-blue-500"
                type="submit"
              >
                Login
              </button>
              <Link to="/register" className="flex flex-col items-center mt-1">
                <button className="bg-green-700 p-2 mt-2 w-full text-white rounded-lg focus:outline-none hover:bg-green-500">
                  Register
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
