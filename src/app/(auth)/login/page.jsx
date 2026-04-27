"use client";

import Link from "next/link";
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
        <div className="mt-10 flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)}
            className="fieldset bg-base-200 border-base-300 rounded-box w-[70vh] border p-4">
                <h2 className="text-3xl font-semibold text-[#403F3F] text-center">Login your account</h2>

                <div className="divider w-xs mx-auto"></div>

                <label className="label text-xl text-[#403F3F]">Email</label>
                <input type="email" className="input w-full" placeholder="Email"
                {...register("email", { required: 'email is required' })}
                />
                {errors.email && <span>{errors.email.message}</span>}

                <label className="label text-xl text-[#403F3F]">Password</label>
                <input type="password" className="input w-full" placeholder="Password"
                {...register("password", { required: 'password is required' })}
                />
                {errors.password && <span>{errors.password.message}</span>}

                <button className="btn bg-[#403F3F] text-white mt-4">Login</button>
                <h2 className="font-semibold text-[16px]">Don't have an account? <Link href={'/register'} className="text-blue-500">Register</Link></h2>
            </form>
        </div>
    );
}

export default LoginPage;