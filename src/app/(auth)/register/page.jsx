"use client";

import { useForm } from "react-hook-form";

const RegisterPage = () => {
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
                <label className="label text-xl text-[#403F3F]">Password</label>
                <input type="password" className="input w-full" placeholder="Password"
                {...register("password", { required: 'password is required' })}
                />
                {errors.password && <span>{errors.password.message}</span>}

                <button className="btn bg-[#403F3F] text-white mt-4">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;