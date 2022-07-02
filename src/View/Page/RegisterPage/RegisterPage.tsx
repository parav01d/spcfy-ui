import React, { useEffect, useRef, useState } from 'react';
import { Theme } from 'react-daisyui';
import { Footer, Navigation } from 'View/Component';
import { Button, Input, Password, validateEmail } from "View/Common";
import { Subject } from 'rxjs';
import Actions, { useDispatch, useSelector } from 'Flux';
import { LoadingIndicator } from 'View/Common/DataDisplay/LoadingIndicator/LoadingIndicator';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const firstName$ = useRef(new Subject<string>()).current;
    const lastName$ = useRef(new Subject<string>()).current;
    const company$ = useRef(new Subject<string>()).current;
    const email$ = useRef(new Subject<string>()).current;
    const register$ = useRef(new Subject<void>()).current;
    const back$ = useRef(new Subject<void>()).current;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");

    const isLoading = useSelector((state) => state.userManagement.openRequests.length > 0)

    useEffect(() => {
        const firstName$$ = firstName$.subscribe(setFirstName);
        const lastName$$ = lastName$.subscribe(setLastName);
        const company$$ = company$.subscribe(setCompany);
        const email$$ = email$.subscribe(setEmail);
        const register$$ = register$.subscribe(() => {

        })
        const back$$ = back$.subscribe(() => {
            navigate("/");
        })

        return () => {
            firstName$$.unsubscribe();
            lastName$$.unsubscribe();
            company$$.unsubscribe();
            email$$.unsubscribe();
            register$$.unsubscribe();
            back$$.unsubscribe();
        };
    }, []);

    return (
        <Theme dataTheme={"spcfy"}>
            <div className="flex flex-col h-screen justify-between bg-[url('/public/login.jpg')] bg-cover bg-center">
                <Navigation>
                    <Button type='primary' subject={back$} value={undefined}>Zurück</Button>
                </Navigation>
                <div className='flex flex-1 flex-col justify-center items-center'>
                    <div className="hero max-w-4xl bg-base-200 rounded">
                        <div className="hero-content flex-col lg:flex-row-reverse p-6">
                            <div className="text-center lg:text-left">
                                <h2 className="text-4xl font-bold">A better way to do metabarcoding is coming!</h2>
                                <p className="py-6">Sign-up now to be among the first to try spcfy.</p>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">First Name</span>
                                        </label>
                                        <Input subject={firstName$} placeholder="Firstname" value={firstName} isValid={firstName.length > 2} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Company</span>
                                        </label>
                                        <Input subject={company$} placeholder="Company" value={company} isValid={company.length > 2} />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Last Name</span>
                                        </label>
                                        <Input subject={lastName$} placeholder="Last Name" value={lastName} isValid={lastName.length > 2} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <Input subject={email$} placeholder="Email" value={email} isValid={validateEmail(email)} />
                                    </div>
                                    <div className="form-control mt-6">
                                        <Button subject={register$} type='primary' value={undefined}>Register</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            {isLoading ? <LoadingIndicator /> : null}
        </Theme>
    )
}