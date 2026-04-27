import logo from '@/assets/logo.png';
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return ( 
        <div className='container mx-auto mt-10 flex flex-col justify-center items-center gap-3'>
            <Image src={logo} alt="Dragon News Logo" width={400} height={60}></Image>
            <p className='text-[18px] text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium text-[#706F6F]'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
     );
}
 
export default Header;