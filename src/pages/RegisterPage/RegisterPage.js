import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { connectingRegister } from "../../Reducer/actionApi";
import axios from "axios";
import * as yup from "yup";

import PictureStore from "../LoginPage/component/bookStore.jpg";

export default function RegisterPage() {
  const today = new Date();
  const dispatch = useDispatch();
  console.log(today);
  const schema = yup.object().shape({
    email: yup.string().required("Please enter the required field").email(),
    password: yup
      .string()
      .required("Please enter the required field")
      .matches(/^[aA-zZ0-9\s]+$/, "Only alphabets are allowed for this field ")
      .min(8),
    first_name: yup
      .string()
      .required("Please enter the required field")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .max(18)
      .min(1),
    last_name: yup
      .string()
      .required("Please enter the required field")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .max(18)
      .min(1),
    birth_date: yup.date().max(today),
    tell: yup
      .string()
      .required("Please enter the required field")
      .matches(/^[0-9\s]+$/, "Only alphabets are allowed for this field ")
      .max(10),
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
    dispatch(connectingRegister(data));
    console.log(errors);
    nextStepClick();
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-row justify-center items-center w-9/12 h-full shadow-2xl">
        <img
          src={PictureStore}
          className="hidden 2xl:block w-full h-full bg-gray-500 rounded-l-lg shadow-md"
          alt="IMG"
        />
        <div className="flex justify-center items-center w-96 h-96 sm:w-full sm:h-full p-8 sm:p-0 rounded-lg shadow-md 2xl:rounded-l-none bg-gradient-to-b from-yellow-500 to-yellow-300">
          <div className="items-center flex flex-col">
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
              <div className="flex flex-col text-base mt-4">Fisrt-Name</div>
              <input
                className="w-full mt-2 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                type="text"
                placeholder="somechai"
                {...register("first_name")}
              />
              {errors?.first_name && (
                <div className="fixed text-red-600 text-sm">
                  * {errors.first_name.message}
                </div>
              )}
              <div className="flex flex-col text-base mt-4">Last-Name</div>
              <input
                className="w-full mt-2 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none "
                type="text"
                placeholder="Nadee"
                {...register("last_name")}
              />
              {errors.last_name && (
                <div className="fixed text-red-600 text-sm">
                  * {errors.last_name.message}
                </div>
              )}
              <div className="flex flex-col text-base mt-4">Birth-Day</div>
              <input
                className="w-full mt-2 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none "
                type="date"
                placeholder="01/01/1999"
                {...register("birth_date")}
              />
              <div className="flex flex-col text-base mt-4">Tell</div>
              <input
                className="w-full mt-2 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none "
                type="text"
                placeholder="088888888"
                {...register("tell")}
              />
              {errors.tell && (
                <div className="fixed text-red-600 text-sm">
                  * {errors.tell.message}
                </div>
              )}
              <div className="flex flex-col text-base mt-4">Address</div>
              <textarea
                className="w-full mt-2 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none "
                placeholder="28 หมู่ 7"
                {...register("address")}
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
