import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { testimonials } from '../helpers/helpers';
import { Authentication } from '../Classes/Authentication';
import { toast } from 'react-toastify';
import { LoginContext } from '../helpers/Contexts';
// ------------------------------------------------------------------

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [index, setIndex] = useState(0);

  const { authenticated, setAuthenticated, user, setUser } =
    useContext(LoginContext);
  if (authenticated) {
    navigate('/dashboard');
  }

  // Authentication
  const auth = new Authentication();
  const createAccount = () => {
    console.log(email);
    const info = {
      fname,
      lname,
      gender,
      email,
      password,
      age,
      height,
      weight,
    };

    const fetchData = async () => {
      const res = await fetch(auth.uribk + '/create_account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(info),
      });
      const data = await res.json();
      if (data) {
        delete info.password;
        setUser(info);
        console.log(user);
        toast.success('Authentication successful!');
      } else {
        toast.error('Account creation failed!');
      }
      setAuthenticated(data);
    };

    fetchData();
  };

  return (
    <main className="h-screen flex bg-[#eceff7]">
      <div className="p-2.5 grid grid-cols-5 child:p-10 w-[1000px] m-auto bg-white rounded-xl shadow-xl ">
        {/* ---------------------------Left side ---------------------*/}
        <div className="col-span-2 bg-messo flex flex-col justify-between rounded-xl">
          <div>
            {/* Company name */}
            <p className="uppercase font-semibold text-white tracking-wider">
              Messo
            </p>

            {/* Main text */}
            <div className="mt-16">
              <h1 className="text-white text-4xl leading-tight font-semibold">
                Start your <br /> journey with us
              </h1>
              <p className="pt-5 text-sm text-[#bdbfff]">
                Discover the world's best support on your healthcare and find
                the best diet and exercise plans.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <div className="flex flex-col gap-6 bg-[#100ad4] p-6 rounded-xl">
              <p className="text-[#c5e0d7cb] text-xs leading-relaxed">
                {testimonials[index].description}
              </p>
              <div className="flex items-center">
                <img
                  src={testimonials[index].img}
                  alt="User dp"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="text-sm font-semibold text-[#c5e0d7]">
                    {testimonials[index].name}
                  </h4>
                  <small className="text-xs text-[#c5e0d7cb] ">
                    Satisfied Client
                  </small>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center mt-5">
              <div
                className={
                  'w-1.5 h-1.5 mr-4 rounded-full bg-white cursor-pointer ' +
                  (index === 0 ? '' : 'opacity-30')
                }
                onClick={() => setIndex(0)}
              ></div>
              <div
                className={
                  'w-1.5 h-1.5 mr-4 rounded-full bg-white cursor-pointer ' +
                  (index === 1 ? '' : 'opacity-30')
                }
                onClick={() => setIndex(1)}
              ></div>
              <div
                className={
                  'w-1.5 h-1.5 mr-4 rounded-full bg-white cursor-pointer ' +
                  (index === 2 ? '' : 'opacity-30')
                }
                onClick={() => setIndex(2)}
              ></div>
            </div>
          </div>
        </div>

        {/* ----------------------------Right column---------------------- */}
        <div className="col-span-3 grid place-items-center">
          <div>
            <div>
              <h1 className="text-3xl font-semibold">Create your account</h1>
              <p className="text-sm text-gray-600 my-4 mb-10">
                Make your messy life organized with our simple yet powerful app.{' '}
              </p>

              {/* Input form */}
              <form
                className="grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  createAccount();
                }}
              >
                {/* Name input */}
                <div className="flex gap-6">
                  <div className="">
                    <label
                      className="text-sm text-gray-600 block font-semibold mb-2"
                      htmlFor="fname"
                    >
                      First name
                    </label>
                    <input
                      className="border border-gray-300 rounded outline-messo px-4 py-2 w-full"
                      name="fname"
                      type="text"
                      placeholder="First name"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                      required
                    ></input>
                  </div>
                  <div className="">
                    <label
                      className="text-sm text-gray-600 block font-semibold mb-2"
                      htmlFor="lname"
                    >
                      Last name
                    </label>
                    <input
                      className="border border-gray-300 rounded outline-messo px-4 py-2 w-full"
                      type="text"
                      name="lname"
                      placeholder="Last name"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>

                {/* Gender input */}
                <div>
                  <h4 className="text-sm text-gray-600 block font-semibold mb-2">
                    Your gender?
                  </h4>
                  <div className="grid grid-cols-2 gap-5">
                    <div
                      className={
                        'flex items-center py-3 px-4 rounded-lg cursor-pointer border ' +
                        (gender === 'male'
                          ? 'border-messo bg-blue-50 text-messo'
                          : 'border-gray-300')
                      }
                      onClick={() => setGender('male')}
                    >
                      <div
                        className={
                          'w-3 h-3 mr-3 outline outline-1 border border-2 border-white rounded-full ' +
                          (gender === 'male'
                            ? 'bg-messo outline-messo'
                            : 'outline-gray-400')
                        }
                      ></div>
                      <p
                        className={
                          gender === 'male' ? 'font-semibold' : 'font-normal'
                        }
                      >
                        Male
                      </p>
                    </div>
                    <div
                      className={
                        'flex items-center py-3 px-4 rounded-lg cursor-pointer border ' +
                        (gender === 'female'
                          ? 'border-messo bg-blue-50 text-messo'
                          : 'border-gray-300')
                      }
                      onClick={() => setGender('female')}
                    >
                      <div
                        className={
                          'w-3 h-3 mr-3 outline outline-1 border border-2 border-white rounded-full ' +
                          (gender === 'female'
                            ? 'bg-messo outline-messo'
                            : 'outline-gray-400')
                        }
                      ></div>
                      <p
                        className={
                          gender === 'female' ? 'font-semibold' : 'font-normal'
                        }
                      >
                        Female
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email input */}
                <div className="">
                  <label
                    className="text-sm text-gray-600 block font-semibold mb-2"
                    htmlFor="email"
                  >
                    Email address
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

                {/* Password input */}
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

                {/* Height and weight */}
                <div className="flex gap-6">
                  <div className="">
                    <label
                      className="text-sm text-gray-600 block font-semibold mb-2"
                      htmlFor="age"
                    >
                      Age (yrs)
                    </label>
                    <input
                      className="border border-gray-300 rounded outline-messo px-4 py-2 w-full"
                      type="number"
                      name="age"
                      placeholder="Ex. 25"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      required
                    ></input>
                  </div>
                  <div className="">
                    <label
                      className="text-sm text-gray-600 block font-semibold mb-2"
                      htmlFor="height"
                    >
                      Height (cm)
                    </label>
                    <input
                      className="border border-gray-300 rounded outline-messo px-4 py-2 w-full"
                      name="height"
                      type="number"
                      min={50}
                      placeholder="Ex. 165"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      required
                    ></input>
                  </div>

                  <div className="">
                    <label
                      className="text-sm text-gray-600 block font-semibold mb-2"
                      htmlFor="weight"
                    >
                      Weight (kg)
                    </label>
                    <input
                      className="border border-gray-300 rounded outline-messo px-4 py-2 w-full"
                      type="number"
                      name="weight"
                      placeholder="Ex. 50"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>
                <input
                  className="btn-primary cursor-pointer"
                  type="submit"
                  value={'Create account'}
                />
              </form>

              <small className="text-gray-600 block mt-10 text-center">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 font-bold">
                  Log In
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LogIn;
