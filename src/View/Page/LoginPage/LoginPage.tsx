import React, { useEffect, useRef, useState } from 'react';
import { Theme } from 'react-daisyui';
import { useNavigate } from "react-router-dom";
import { Footer, Navigation } from 'View/Component';
import { Button, Input, Password, validateEmail } from "View/Common";
import { Subject } from 'rxjs';
import Actions, { useDispatch, useSelector } from 'Flux';
import { LoadingIndicator } from 'View/Common/DataDisplay/LoadingIndicator/LoadingIndicator';

export const LoginPage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const email$ = useRef(new Subject<string>()).current;
  const password$ = useRef(new Subject<string>()).current;
  const login$ = useRef(new Subject<void>()).current;
  const register$ = useRef(new Subject<void>()).current;


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLoading = useSelector((state) => state.userManagement.openRequests.length > 0)

  useEffect(() => {
    const email$$ = email$.subscribe(setEmail);
    const password$$ = password$.subscribe(setPassword);
    const login$$ = login$.subscribe(() => {
      dispatch(Actions.authenticateRequest({ email, password }));
    })
    const register$$ = register$.subscribe(() => {
      navigate("/register");
    })

    return () => {
      email$$.unsubscribe();
      password$$.unsubscribe();
      login$$.unsubscribe();
      register$$.unsubscribe();
    };
  }, []);

  return (
    <Theme dataTheme={"spcfy"}>
      <div className="flex flex-col h-screen justify-between bg-[url('/public/login.jpg')] bg-cover bg-center">
        <Navigation>
          <Button type='primary' subject={register$} value={undefined}>Register</Button>
        </Navigation>
        <div className='flex flex-1 flex-col justify-center items-center'>
          <div className="hero max-w-4xl bg-base-200 rounded">
            <div className="hero-content flex-col lg:flex-row-reverse p-6">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold">Bioinformatic power in your hands</h2>
                <p className="py-6">Decision makers & scientists need to be able to read bioinformatic information to be able to underline their program. Let us show you how you can make sense of bioinformatic sequences.</p>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <Input subject={email$} placeholder="email" value={email} isValid={validateEmail(email)} />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <Password subject={password$} placeholder="password" value={password} isValid={password.length > 5} />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <Button subject={login$} type='primary' value={undefined}>Login</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"flex md:flex-row flex-col justify-between p-6"}>
        <div className={"flex-1 bg-secondary text-center"}>
          <div className={"p-6 w-auto justify-center flex"} >
            <img src={"/store.png"} className={"w-48 h-16 object-cover"} />
          </div>
          <b className='pt-6 pb-6'>your metabarcoding data in one central repository</b>
          <p className='pt-6 pb-6'>Data upload of your RAW FastQ files and/or your OTU tables is a simple operation using spcfy!</p>
        </div>
        <div className={"flex-1 bg-secondary text-center"}>
          <div className={"p-6 w-auto justify-center flex"} >
            <img src={"/analyse.png"} className={"w-48 h-16 object-cover"} />
          </div>
          <b className='pt-6 pb-6'>your data using our intuitive bioinformatic pipeline</b>
          <p className='pt-6 pb-6'>spcfy allows everyone to apply bioinformatics, while providing a maximum of taxonomic resolution.</p>
        </div>
        <div className={"flex-1 bg-secondary text-center"}>
          <div className={"p-6 w-auto justify-center flex"} >
            <img src={"/visualise.png"} className={"w-48 h-16 object-cover"} />
          </div>
          <b className='pt-6 pb-6'>your results based on your questions and requirements</b>
          <p className='pt-6 pb-6'>Explore and highlight details within your data using dynamic and intersecting graphs. </p>
        </div>
        <div className={"flex-1 bg-secondary text-center"}>
          <div className={"p-6 w-auto justify-center flex"} >
            <img src={"/share.png"} className={"w-48 h-16 object-cover"} />
          </div>
          <b className='pt-6 pb-6'>and compare, experiment setups, data sets and results</b>
          <p className='pt-6 pb-6'>Connect with the global metabarcoding community, share data and results to discover synergies. </p>
        </div>
      </div>
      <Footer />
      {isLoading ? <LoadingIndicator /> : null}
    </Theme>
  )
}
