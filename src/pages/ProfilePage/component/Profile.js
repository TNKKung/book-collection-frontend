import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useUser } from "../../../state/userAction/hooks";

export default function Profile(props) {
  const { user } = useSelector((state) => state.userApi);
  const { handleUpdateUser } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleUpdateUser(data);
    console.log(errors);
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <div className="mr-20">
        <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
          <div className="flex flex-col justify-center w-44">
            <div className="h-14 flex items-center">First-Name :</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="h-14 flex items-center w-72">
              {props.stateEditProfile ? (
                <div className="">{user.first_name}</div>
              ) : (
                <input
                  className="w-full mt-2 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  type="text"
                  placeholder="somechai"
                  {...register("first_name")}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
          <div className="flex flex-col justify-center w-44">
            <div className="h-14 flex items-center">Last-Name :</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="h-14 flex items-center w-72">
              {props.stateEditProfile ? (
                <div className="">{user.last_name}</div>
              ) : (
                <input
                  className="w-full mt-2 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none "
                  type="text"
                  placeholder="Nadee"
                  {...register("last_name")}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
          <div className="flex flex-col justify-center w-44">
            <div className="h-14 flex items-center">E-mail :</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="h-14 flex items-center w-72">
              {props.stateEditProfile ? (
                <div className="">{user.email}</div>
              ) : (
                <input
                  className="w-full h-12 pl-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  id="input-instagram"
                  type="text"
                  value={user.email}
                  disabled
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
          <div className="flex flex-col justify-center w-44">
            <div className="h-14 flex items-center">Tell :</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="h-14 flex items-center w-72">
              {props.stateEditProfile ? (
                <div className="">{user.tell}</div>
              ) : (
                <input
                  className="w-full p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none "
                  type="text"
                  placeholder="088888888"
                  {...register("tell")}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
          <div className="flex flex-col justify-center w-44">
            <div className="h-14 flex items-center">Address :</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="h-14 flex items-center w-72">
              {props.stateEditProfile ? (
                <div className="">{user.address}</div>
              ) : (
                <textarea
                  className="w-full mt-2 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none "
                  placeholder="28 หมู่ 7"
                  {...register("address")}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
          <div className="flex flex-col justify-center w-44">
            <div className="h-14 flex items-center">Birth-Day :</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="h-14 flex items-center w-72">
              {props.stateEditProfile ? (
                <div className="">{user.birth_date}</div>
              ) : (
                <input
                  className="w-full mt-2 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none "
                  type="date"
                  placeholder="01/01/1999"
                  {...register("birth_date")}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 mr-8">
          <div className="flex flex-col justify-center w-44">
            <div className="h-14 flex items-center">All My Books :</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="h-14 flex items-center w-72">
              <div className="">14</div>
            </div>
          </div>
        </div>
      </div>

      {props.stateEditProfile ? (
        <div></div>
      ) : (
        <div className="flex flex-row justify-center mb-5 ">
          <button
            className="bg-green-500 h-14 w-36 rounded-lg focus:outline-none"
            type="submit"
          >
            Save
          </button>
        </div>
      )}
    </form>
  );
}
