import { useState, useContext } from "react"

import { useNavigate } from "react-router-dom"

import { useForm } from "react-hook-form"

import axios from "axios"

import currentUserContext from "../contexts/current-user-context";


export default function Login() {

  /*const token = "AAAAAAAAAAAAAAAAAAAAAELgsAEAAAAAd63umKb2hk43Yk7f%2Bj%2Bx8Lswk1c%3DaODYr84xOGOrUotk6GcqvtElYsrncBhNHSzoetJU0XcFb8xyhF";


  const endpointURL = "https://api.twitter.com/2/usage/tweets";
  axios.get(endpointURL, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
    .then(response => console.log(response))
    .catch(error => console.error(error));*/

  const { currentUser, setCurrentUser } = useContext(currentUserContext);

  // console.log("currentUser: ", currentUser);
  const navigate = useNavigate();


  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    const newCurrentUser = {
      ...currentUser,
      pseudo: `${data.pseudo}`,
      userName: `@${data.username}`,
      slug: data.username,
      isLogin: true,
    };
    setCurrentUser(newCurrentUser);

    axios.post("https://65b90362b71048505a89fa29.mockapi.io/current-user", newCurrentUser)
      .then(response => console.log(response))
      .catch(error => console.error(error));

    setTimeout(() => {
      axios.get("https://65b90362b71048505a89fa29.mockapi.io/current-user")
        .then(response => console.log("response after put: ", response.data))
    }, 3000);
    navigate("/home");
  };


  return (
    <div className="login h-full w-full relative flex justify-center items-center pt-[20%]">
      <form onSubmit={handleSubmit(onSubmit)} className="text-[#fff] p-4" noValidate>
        <div className="space-y-12">

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-xl text-center font-semibold leading-7 mb-10">Remplissez le formulaire pour vous connecter</h2>

            <div className="">
              <div className="wave-group sm:col-span-3 mb-8 username">
                <input required name="username" type="text" className="input w-full" id="username" {...register("username", {
                  required: "Ce champ est obligatoire",
                  minLength: {
                    value: 3,
                    message: "Le Username doit contenir au moins 3 caractères",
                  },
                  maxLength: {
                    value: 25,
                    message: "Le Username doit contenir au maximum 25 caractères",
                  },
                  pattern: {
                    value: /^[0-9a-zA-Z_]+$/,
                    message: "Le Username ne doit contenir que des caractères alphanumériques et le caractère '_' (le soulignement du bas)",
                  }
                })} autoComplete="off" />
                <span className="bar" />
                <label className="label" htmlFor="username">
                  <>
                    <span className="label-char" style={{ "--index": 0 }}>U</span>
                    <span className="label-char" style={{ "--index": 1 }}>s</span>
                    <span className="label-char" style={{ "--index": 2 }}>e</span>
                    <span className="label-char" style={{ "--index": 3 }}>r</span>
                    <span className="label-char" style={{ "--index": 4 }}>n</span>
                    <span className="label-char" style={{ "--index": 5 }}>a</span>
                    <span className="label-char" style={{ "--index": 6 }}>m</span>
                    <span className="label-char" style={{ "--index": 7 }}>e</span>
                  </>
                </label>
                {errors.username?.message && <p className="text-red-500 text-sm">{errors.username?.message}</p>}
              </div>

              <div className="wave-group sm:col-span-3 pseudo">
                <input required type="text" className="input w-full" id="pseudo" {...register("pseudo", {
                  required: "Ce champ est obligatoire",
                  minLength: {
                    value: 3,
                    message: "Le Pseudo doit contenir au moins 3 caractères",
                  },
                  maxLength: {
                    value: 25,
                    message: "Le Pseudo doit contenir au maximum 25 caractères",
                  },
                })} autoComplete="off" />
                <span className="bar" />
                <label className="label" htmlFor="pseudo">
                  <>
                    <span className="label-char" style={{ "--index": 0 }}>P</span>
                    <span className="label-char" style={{ "--index": 1 }}>s</span>
                    <span className="label-char" style={{ "--index": 2 }}>e</span>
                    <span className="label-char" style={{ "--index": 3 }}>u</span>
                    <span className="label-char" style={{ "--index": 4 }}>d</span>
                    <span className="label-char" style={{ "--index": 5 }}>o</span>
                  </>
                </label>
                {errors.pseudo?.message && <p className="text-red-500 text-sm">{errors.pseudo?.message}</p>}
              </div>


            </div>
          </div>

        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Se Connecter
          </button>
        </div>

      </form>
    </div>
  );
}