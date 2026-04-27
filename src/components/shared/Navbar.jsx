'use client'

import Image from "next/image";
import userAvatar from '@/assets/user.png'
import NavLink from "./NavLink";
import Link from "next/link";
import { authClient } from "@/lib/auth-client"

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    // console.log(user);


    return ( 
        <div className="flex items-center justify-between container mx-auto mt-4">
            <div></div>
            <div>
                <ul className="flex items-center gap-6">
                    <li><NavLink href={'/'}>Home</NavLink></li>
                    <li><NavLink href={'/career'}>Career</NavLink></li>
                    <li><NavLink href={'/about'}>About</NavLink></li>
                </ul>
            </div>
            {isPending ? <span className="loading loading-ring loading-xl"></span>
            : 
            user ? <div className="flex items-center gap-2">
                <h2>Welcome, {user?.name}</h2>
                <Image src={user?.image || userAvatar} alt="User Profile Pic" width={40} height={40} className="rounded-full"></Image>
                <Link href={'/login'}>
                    <button onClick={async ()=> await authClient.signOut()} className="btn bg-[#403F3F] text-white">Logout</button>
                </Link>
            </div> :
            <Link href={'/login'}>
                <button className="btn bg-[#403F3F] text-white">Login</button>    
            </Link>}
        </div>
     );
}
 
export default Navbar;