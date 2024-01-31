import { useState, useContext } from "react"

import { useNavigate } from "react-router-dom"

import { useForm } from "react-hook-form"

import currentUserContext from "../contexts/current-user-context"

export default function Login() {
  const [userName, setUserName] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [slug, setSlug] = useState("");


  const { currentUser, setCurrentUser } = useContext(currentUserContext);

  // console.log("currentUser: ", currentUser);
  const navigate = useNavigate();

  const handleChangeUsername = (e) => {
    const filteredValue = e.target.value.replace(/[^a-zA-Z_]/g, "_");
    setUserName(filteredValue);
    setSlug(filteredValue);
  }

  const handleClick = (e) => {
    e.preventDefault();




    const newCurrentUser = {
      ...currentUser,
      pseudo: `${pseudo}`,
      userName: `@${userName}`,
      slug,
      isLogin: true,
    };
    navigate("/home");


    setCurrentUser(newCurrentUser);
  }

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data, e) => {
    console.log("data: ", data);
    e.target.reset();
  }

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
                    value: /^[a-zA-Z_]+$/,
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