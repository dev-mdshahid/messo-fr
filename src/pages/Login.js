import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userDp from '../media/img/shahid.jpg';

// Importing icons
import { FaQuoteLeft } from 'react-icons/fa';

// ------------------------------------------------------------------

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [name, setName] = useState('');

  const login = () => {
    console.log(email);
  };
  return (
    <main className="h-screen flex bg-[#eceff7]">
      <div className="grid grid-cols-2 child:px-20 w-[1000px] h-[630px] m-auto bg-white rounded-xl overflow-hidden shadow-xl ">
        {/* Left column */}
        <div className="grid place-items-center">
          <div>
            <div>
              <h1 className="text-3xl font-semibold">Welcome to MessO</h1>
              <p className="text-sm text-gray-500 my-4 mb-10">
                Make your messy life organized with our simple yet powerful app.{' '}
              </p>

              {/* Input form */}
              <form
                className="grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  login();
                }}
              >
                <div className="">
                  <label
                    className="text-sm text-gray-600 block font-semibold mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="border border-gray-300 rounded outline-messo px-4 py-2 w-full"
                    type="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  ></input>
                </div>
                <div className="">
                  <label
                    className="text-sm text-gray-600 block font-semibold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="border border-gray-300 rounded outline-messo px-4 py-2 w-full"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  ></input>
                </div>
                <button
                  className="btn-primary"
                  type="submit"
                >
                  Log In
                </button>
              </form>

              <small className="text-gray-500 block mt-10 text-center">
                Don't have an account?{' '}
                <Link to="/signup" className="text-blue-600 font-bold">
                  Sign up
                </Link>
              </small>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="bg-messo grid items-center">
          <div>
            <div className="bg-[#93f8e1] w-10 h-10 rounded-full flex items-center justify-center">
              <FaQuoteLeft className="text-messo" />
            </div>

            <div className="flex">
              {/* Vertical line */}
              <div className="w-32 h-auto mt-3">
                <div className="w-0.5 h-full bg-[#484ff4] mx-auto"></div>
              </div>

              {/* right side content of vertical line */}
              <div className="">
                <h1 className="relative right-8 mt-7 mb-10 text-5xl text-[#edfcf7] font-bold leading-normal">
                  Messy to Organized
                </h1>

                <div className="flex relative right-5">
                  {/* Horizontal Line */}
                  <div className="mt-2">
                    <div className="h-0.5 w-12 mr-8 bg-[#484ff4]"></div>
                  </div>

                  {/* Testimonial */}
                  <div className="flex flex-col gap-6">
                    <p className="text-[#c5e0d7cb] text-xs leading-relaxed">
                      "MessO has changed my life drastically. Back in quarantine
                      time, I gained tons of weight but with the help of MessO I
                      managed to balance that again."
                    </p>
                    <div className="flex items-center">
                      <img
                        src={userDp}
                        alt="User dp"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-[#c5e0d7]">
                          Md Shahidul Islam
                        </h4>
                        <small className="text-xs text-[#c5e0d7cb] ">
                          Satisfied Client
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LogIn;
