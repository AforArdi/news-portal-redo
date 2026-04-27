'use client'

import { authClient } from "@/lib/auth-client";
import { createAuthClient } from "better-auth/client";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBAr = () => {
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold text-[#403F3F]">Login with</h2>
            <div className="mt-4 flex flex-col justify-center gap-4">
                <button onClick={handleGoogleSignIn} className="btn btn-outline text-blue-500"><FaGoogle></FaGoogle> Login with Google</button>
                <button className="btn btn-outline"><FaGithub></FaGithub> Login with Github</button>
            </div>
        </div>
    );
}

export default RightSideBAr;