import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import Image from 'next/image';
import LogoText from '@/assets/brand/logo-text.png';
import { loginPost } from '@/utils/api/http';
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [loginError, setLoginError] = useState({
        hasError: false,
        status: undefined,
        message: "",
    });

    const onSubmit = async (data: FieldValues) => {
        setLoading(true);
        try {
            const result: any = await loginPost('token/', data, {}, () => { }).finally(() => setLoading(false));
            if (result.access) {
                localStorage.setItem('access', result.access);
                localStorage.setItem('refresh', result.refresh);
                router.push('/dashboard');
            } else {
                setLoginError({
                    hasError: true,
                    status: result.status,
                    message: 'There was an error with your login. Please try again.',
                });
            }
        } catch (error) {
            setLoginError({
                hasError: true,
                status: undefined,
                message: 'There was an error with your login. Please try again.',
            });
            setLoading(false);
        }
    };

    return (
        <div className="authContainer">
            <aside className="authAsideWelcome">
                <Image src={LogoText} alt="InGenius Studio Logo" width={185} />
                <h1 className="authWelcomeTitle">Welcome to InGenius Studio</h1>
                <h2 className="authWelcomeSubtitle">
                    Your journey to innovative and creative solutions starts here. Let's unlock new possibilities together.
                </h2>
                <div className="authCircle" />
            </aside>
            <aside className="authFormContainer">
                <h4 className="authFormTitle">Nice to see you!</h4>
                <form action="POST" className="authForm" onSubmit={handleSubmit(onSubmit)}>
                    <label className="authLabel" htmlFor="username">
                        Username
                    </label>
                    <input className={errors.username ? "authInputError" : "authInput"} type="text" id="username" placeholder="Username" {...register("username", {
                        required: 'Username is required',
                    })} />
                    <label className="authLabel" htmlFor="password">
                        Password
                    </label>
                    <input className={errors.password ? "authInputError" : "authInput"} type="password" id="password" {...register("password", {
                        required: 'Password is required',
                    })} />
                    {loginError.hasError && <p className="authInputErrorText">{loginError.message}</p>}
                    <button className="authButton" type="submit">
                        {loading ? <div className='spinner-white' /> : 'Login'}
                    </button>
                </form>
            </aside>
        </div>
    );
}
