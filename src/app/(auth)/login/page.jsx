"use client";

import { useForm } from "react-hook-form";

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}
            className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email"
                {...register("email", { required: 'email is required' })}
                />
                {errors.email && <span>{errors.email.message}</span>}

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password"
                {...register("password", { required: 'password is required' })}
                />
                {errors.password && <span>{errors.password.message}</span>}

                <button className="btn btn-neutral mt-4">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;