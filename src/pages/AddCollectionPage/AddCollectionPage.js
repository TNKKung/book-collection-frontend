import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useUser } from "../../state/userAction/hooks";
import PageLayout from "../../components/PageLayout/PageLayout";
import "../../css/upload.css";

export default function AddCollectionPage() {
  const stateLeftBar = useSelector((state) => state.storeState.stateLeftBar);
  const { user } = useSelector((state) => state.userApi);
  const history = useHistory();
  const { handleCreateBook } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    Object.assign(data, { owner_id: user.id });
    handleCreateBook(data);
    console.log(errors);
    history.push("/mycollection");
  };
  return (
    <PageLayout>
      <div
        className={`flex w-screen ${
          stateLeftBar ? "ml-96" : "ml-80"
        }  transition-all duration-500 mt-44`}
      >
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex bg-white max-w-6xl w-full rounded-lg">
            <div className="flex flex-row text-black">
              <div className="flex flex-col w-screen max-w-lg items-center justify-center text-black text-xl">
                <div className="border-4 border-yellow-400 rounded-full">
                  <div className="wrapper">
                    <div className="file-upload flex flex-col">
                      <input type="file" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-24 w-24 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p className="text-sm text-black">upload images</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-screen max-w-lg text-black justify-center items-center mt-7 mb-5">
              <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3">
                <div className="flex flex-col justify-center w-44">
                  <div className="h-14 flex items-center">Name :</div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="h-14 flex items-center w-72">
                    <input
                      className="w-72 h-11 p-2 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                      type="text"
                      placeholder={"harry potter"}
                      {...register("book_name")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3">
                <div className="flex flex-col justify-center w-44">
                  <div className="h-14 flex items-center">Categories :</div>
                </div>
                <div className="relative h-12 w-72">
                  <select
                    className="border-2 rounded-md border-gray-300 w-full h-full"
                    {...register("categories")}
                  >
                    <option>Manga</option>
                    <option>Fiction</option>
                    <option>Course</option>
                    <option>Religion</option>
                    <option>Language</option>
                    <option>Social sciences</option>
                    <option>Literature</option>
                    <option>Natural science & mathematic</option>
                    <option>History and geography</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3">
                <div className="flex flex-col justify-center w-44">
                  <div className="h-14 flex items-center">Owner :</div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="h-14 flex items-center w-72">
                    <input
                      className="w-72 h-11 p-2 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                      type="text"
                      placeholder={"nattawut"}
                      {...register("owner_name")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3">
                <div className="flex flex-col justify-center w-44">
                  <div className="h-14 flex items-center">email :</div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="h-14 flex items-center w-72">
                    <input
                      className="w-72 h-11 p-2 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                      type="text"
                      placeholder={"tnk@gmail.com"}
                      {...register("email")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3">
                <div className="flex flex-col justify-center w-44">
                  <div className="h-14 flex items-center">Tell :</div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="h-14 flex items-center w-72">
                    <input
                      className="w-72 h-11 p-2 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                      type="text"
                      placeholder={"0871772777"}
                      {...register("tell")}
                    />
                  </div>
                </div>
              </div>
              <button>
                <div className="flex items-center justify-center bg-green-500 hover:bg-green-600 w-44 h-14 rounded-xl text-xl text-black mt-2 ml-4">
                  add collection
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </PageLayout>
  );
}
