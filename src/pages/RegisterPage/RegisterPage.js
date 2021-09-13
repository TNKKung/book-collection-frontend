import React from "react";
import { useForm } from "react-hook-form";
import PictureStore from "../LoginPage/component/bookStore.jpg";
import Logo from "../../Images/logoBook.png";
const axios = require("axios");

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>
    axios.post("http://localhost:3003/v1/auth/register", data);

  // const sendFormData = async () => {
  //   axios.post("http://localhost:3003/v1/auth/register", {
  //     email: email,
  //     password: password,
  //     first_name: firstName,
  //     last_name: lastName,
  //     tell: tell,
  //     birth_date: birthDate,
  //     address: "asdasdas",
  //   });
  // };
  console.log(errors)

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-row justify-center items-center w-9/12 h-5/6 shadow-2xl">
        <img
          src={PictureStore}
          className="hidden 2xl:block w-full h-full bg-gray-500 rounded-l-lg shadow-md"
          alt="IMG"
        />
        <div className="w-96 h-96 sm:w-full sm:h-full p-8 sm:p-0 rounded-lg shadow-md 2xl:rounded-l-none bg-gradient-to-b from-yellow-500 to-yellow-300">
          <div className="items-center flex flex-col mt-10">
            <img src={Logo} className="w-24" alt="IMG" />
            <form
              className="w-80 mt-2"
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col items-center text-base">
                {" "}
                E-mail
              </div>
              <input
                className="w-full p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none mt-2"
                type="email"
                placeholder="tttt@tttt.com"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Article Title is required",
                  },
                })}
              />
              {errors?.email && (
                <div className="text-red-600 text-xl">
                  {errors.email.message}
                </div>
              )}
              <div className="flex flex-col items-center text-base mt-2">
                {" "}
                Password
              </div>
              <input
                className="w-full mt-2 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none "
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: { value: true, message: 'Article Title is required' },
                })}
              />
              {errors?.password && (
                <div className="text-red-600 text-xl">
                  {errors.password.message}
                </div>
              )}
              <div className="flex flex-col items-center text-base mt-2">
                Fisrt-Name
              </div>
              <input
                className="w-full mt-2 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none "
                type="text"
                placeholder="somechai"
                {...register("first_name", {
                  required: { value: true, massage: "" },
                })}
              />
              <div className="flex flex-col items-center text-base mt-2">
                Last-Name
              </div>
              <input
                className="w-full mt-2 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none "
                type="text"
                placeholder="Nadee"
                {...register("last_name", {
                  required: { value: true, massage: "" },
                })}
              />
              <div className="flex flex-col items-center text-base mt-2">
                Birth-Day
              </div>
              <input
                className="w-full mt-2 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none "
                type="date"
                placeholder="01/01/1999"
                {...register("birth_date", {
                  required: { value: true, massage: "" },
                })}
              />
              <div className="flex flex-col items-center text-base mt-2">
                Tell
              </div>
              <input
                className="w-full mt-2 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none "
                type="text"
                placeholder="088888888"
                {...register("tell", {
                  required: { value: true, massage: "" },
                })}
              />
              <div className="flex flex-col items-center text-base mt-2">
                Address
              </div>
              <textarea
                className="w-full mt-2 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none "
                placeholder="088888888"
                {...register("address", {
                  required: { value: true, massage: "" },
                })}
              />

              <button
                className="bg-green-500 p-2 mt-2 w-full text-white rounded-lg focus:outline-none hover:bg-green-600"
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
