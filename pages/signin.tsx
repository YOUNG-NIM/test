import Head from 'next/head'
import Footer from "../components/footer";
import styles from '../styles/Home.module.css'
import AppInfo from "../components/appInfo";

import React, { useState, useRef } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Signin: React.FC = (props) => {

  const [formStatus, setFormStatus] = useState<string>("");

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const { status } = useSession();
  const router = useRouter();

  async function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault();
  } // end of submitHandler function

  if (status === "authenticated") {
    router.replace("/");
    return (
      <div>
        <h1>Sign Up</h1>
        <div>You are already signed up.</div>
        <div>Now redirect to main page.</div>
      </div>
    );
  }

  return (
    <div>
        <Head>
            <title>MODU: 모두의비상금2</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scaleable=no"></meta>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="">

        <nav className="navbar">

            <div className="container-fluid m-3">

                 <a className="navbar-brand" href="../">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>

                </a>

                <span className="fs-5 text-center">로그인</span>
                
                <span className="opacity-0">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>

                </span>
                
            </div>

        </nav>
            
            <div className={styles.container}>

                <div className="text-center mt-4">
                    <h1>
                    Sign In
                    </h1>
                </div>

                <form
                    onSubmit={submitHandler}
                    className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
                >
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="form-control"
                            id="name"
                            type="text"
                            placeholder="Name"
                            required
                            ref={nameInputRef}
                        />
                    </div>
                    <div className="mb-4">
                    <label className="form-label" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="form-control"
                        id="email"
                        type="text"
                        placeholder="Email"
                        required
                        ref={emailInputRef}
                    />
                    </div>
                    <div className="mb-6">
                    <label className="form-label" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="form-control"
                        id="password"
                        type="password"
                        required
                        ref={passwordInputRef}
                    />
                    <p className="text-red-500 text-xs italic">
                        {/* Please choose a password. */}
                        {formStatus}
                    </p>
                    </div>
                    <div className="flex items-center justify-between">
                    <button
                        className="btn btn-dark"
                        type="submit"
                    >
                        Sign In
                    </button>
                    </div>

                </form>

            </div>

        </div>

        <AppInfo/>
        <Footer/>

    </div>
  );
};

export default Signin;