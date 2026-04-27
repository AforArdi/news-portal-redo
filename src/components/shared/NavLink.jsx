'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({href, children, className}) => {
    const pathname = usePathname();
    const isActive = href === pathname;

    return ( 
        <div>
            <Link href={href} className={`${isActive ? 'border-b-2 border-blue-500' : ''}`}>{children}</Link>
        </div>
     );
}
 
export default NavLink;