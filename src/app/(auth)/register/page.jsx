"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        // console.log(data);
        const {name, email, password, photo} = data;
        const { data: res, error } = await authClient.signUp.email({
            email, // user email address
            password, // user password -> min 8 characters by default
            name, // user display name
            image: photo, // User image URL (optional)
            callbackURL: "/" // A URL to redirect to after the user verifies their email (optional)
        })
        if(error){
            alert(`${error.message}`)
        }
        if(res){
            alert('Register Success!')
        }
    }

    return (
        <div className="mt-10 flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)}
                className="fieldset bg-base-200 border-base-300 rounded-box w-[70vh] border p-4">
                <h2 className="text-3xl font-semibold text-[#403F3F] text-center">Register your account</h2>

                <div className="divider w-xs mx-auto"></div>

                {/* name */}
                <label className="label text-xl text-[#403F3F]">Name</label>
                <input type="text" className="input w-full" placeholder="Name"
                    {...register("name", { required: 'name is required' })}
                />
                {errors.name && <span>{errors.name.message}</span>}

                {/* photo url */}
                <label className="label text-xl text-[#403F3F]">Photo URL</label>
                <input type="text" className="input w-full" placeholder="Photo Url"
                    {...register("photo", { required: 'photo url is required' })}
                />
                {errors.photo && <span>{errors.photo.message}</span>}

                {/* email */}
                <label className="label text-xl text-[#403F3F]">Email</label>
                <input type="email" className="input w-full" placeholder="Email"
                    {...register("email", { required: 'email is required' })}
                />
                {errors.email && <span>{errors.email.message}</span>}

                {/* password */}
                <div className="relative">
                    <label className="label text-xl text-[#403F3F]">Password</label>
                    <input type={isVisible ? 'text' : 'password'} className="input w-full" placeholder="Password"
                        {...register("password", { required: 'password is required' })}
                    />
                    <span onClick={() => setIsVisible(!isVisible)}
                        className="absolute right-4 top-9 cursor-pointer"
                    >
                        {isVisible ? <FaRegEye size={20}></FaRegEye> : <FaRegEyeSlash size={20}></FaRegEyeSlash>}
                    </span>
                    {errors.password && <span>{errors.password.message}</span>}
                </div>

                <button className="btn bg-[#403F3F] text-white mt-4">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;