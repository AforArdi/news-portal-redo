import Image from "next/image";
import userAvatar from '@/assets/user.png'
import NavLink from "./NavLink";
import Link from "next/link";

const Navbar = () => {
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
            <div className="flex items-center gap-2">
                <Image src={userAvatar} alt="User Profile Pic" width={40} height={40} className="rounded-full"></Image>
                <Link href={'/login'}>
                    <button className="btn btn-primary">Login</button>
                </Link>
            </div>
        </div>
     );
}
 
export default Navbar;