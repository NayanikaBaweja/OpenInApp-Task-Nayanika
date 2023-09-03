import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillApple
} from "react-icons/ai";
import { BiLogoDiscord } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { database } from "../Components/FirebaseConfig";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [log, setLog] = useState(false);

  const handleLog = () => {
    setLog(!log);
  };

  const history = useNavigate()

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value

        signInWithEmailAndPassword(database, email, password).then(() => {
            history('/dashboard')
        }).catch(error=>{
            alert(error);
        })
    }

    const handleSignupSubmit = (event) => {
      event.preventDefault();
      const email = event.target.email.value
      const password = event.target.password.value

      createUserWithEmailAndPassword(database, email, password).then(data => {
          console.log(data, "authData")
          history('/')
      }).catch(error=>{
          alert(error);
      })

  }

  return (
    <section>
      <div className="relative bg-light">
        <div className="lg:absolute w-full top-0">
          <div className="grid lg:grid-cols-2 z-50">
            <div className="grid h-full ">
              <div className="bg-primary w-full lg:bg-white/[0.00001] lg:w-auto">
                <h3 className="text-white p-10 font-bold">LOGO</h3>
              </div>
              <div className="bg-primary w-full lg:bg-white/[0.00001] lg:w-auto">
                <h1 className="text-5xl font-mon font-bold text-white text-center lg:p-52 p-10">
                  Board.
                </h1>
              </div>
              <div className="lg:flex items-center gap-6 px-40 pt-10 hidden">
                <AiFillGithub className="h-10 w-10 text-white cursor-pointer" />
                <AiFillTwitterCircle className="h-10 w-10 text-white cursor-pointer" />
                <AiFillLinkedin className="h-10 w-10 text-white cursor-pointer" />
                <BiLogoDiscord className="h-10 w-10 text-white cursor-pointer" />
              </div>
            </div>
            <div>
              {!log ? (
                <section className="w-full h-full grid place-content-center">
                  <div className="px-10 py-5 rounded-2xl">
                    <h2 className="text-3xl font-bold pt-6 font-mon">
                      Sign In
                    </h2>
                    <h3 className="font-mon text-lg font-medium pb-6">Sign in to your account</h3>
                    <div className="flex gap-4 pb-6">
                      <div className="flex gap-4 items-center bg-white w-fit px-3 py-2 rounded-xl">
                        <FcGoogle className="h-5 w-5" /> Sign in with Google
                      </div>
                      <div className="flex gap-4 items-center bg-white w-fit px-3 py-2 rounded-xl">
                        <AiFillApple className="h-5 w-5 text-lightgrey" /> Sign in with Apple
                      </div>
                    </div>
                    <form onSubmit={handleLoginSubmit} className="bg-white rounded-xl p-5">
                      <div className="grid mb-5">
                        <label for="email" className="text-md font-medium mb-1">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email address"
                          className="w-80 rounded-md border-2 border-grey/[0.7] bg-grey/[0.7] py-2 px-4"
                        />
                      </div>
                      <div className="grid mb-3">
                        <label
                          for="password"
                          className="text-md font-medium mb-1"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          placeholder="Enter your password"
                          className="w-80 rounded-md border-2 border-grey/[0.7] bg-grey/[0.7] py-2 px-4"
                        />
                      </div>
                      <div className="flex mb-5 items-center gap-2">
                        <label
                          for="remember"
                          className="text-base text-primary font-normal mb-1"
                        >
                          Forgot Password ?
                        </label>
                      </div>
                      <div className="grid">
                        <button className="bg-primary text-white text-base font-semibold py-3 rounded-md hover:bg-primary/[0.8]">
                          Sign In
                        </button>
                      </div>
                    </form>
                    <h2 className="text-sm font-medium py-6 text-center">
                      New to MyApp?{" "}
                      <span onClick={handleLog} className="text-primary cursor-pointer">Sign Up</span>
                    </h2>
                  </div>
                </section>
              ) : (
                <section className="w-full h-full grid place-content-center">
                  <div className="px-10 py-5 rounded-2xl">
                    <h2 className="text-3xl font-bold pt-6 font-mon">
                      Sign Up
                    </h2>
                    <h3 className="font-mon text-lg font-medium pb-6">Sign up to your account</h3>
                    <div className="flex gap-4 pb-6">
                      <div className="flex gap-4 items-center bg-white w-fit px-3 py-2 rounded-xl">
                        <FcGoogle className="h-5 w-5" /> Sign up with Google
                      </div>
                      <div className="flex gap-4 items-center bg-white w-fit px-3 py-2 rounded-xl">
                        <AiFillApple className="h-5 w-5 text-lightgrey" /> Sign up with Apple
                      </div>
                    </div>
                    <form onSubmit={handleSignupSubmit} className="bg-white rounded-xl p-5">
                      <div className="grid mb-5">
                        <label for="email" className="text-md font-medium mb-1">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email address"
                          className="w-80 rounded-md border-2 border-grey/[0.7] bg-grey/[0.7] py-2 px-4"
                        />
                      </div>
                      <div className="grid mb-3">
                        <label
                          for="password"
                          className="text-md font-medium mb-1"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          placeholder="Enter your password"
                          className="w-80 rounded-md border-2 border-grey/[0.7] bg-grey/[0.7] py-2 px-4"
                        />
                      </div>
                      
                      <div className="grid py-3">
                        <button className="bg-primary text-white text-base font-semibold py-3 rounded-md hover:bg-primary/[0.8]">
                          Sign Up
                        </button>
                      </div>
                    </form>
                    <h2 className="text-sm font-medium py-6 text-center">
                      Registered User?{" "}
                      <span onClick={handleLog} className="text-primary cursor-pointer">Login</span>
                    </h2>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <img className=" h-screen w-[50%] z-0" src="assets/left.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Login;
