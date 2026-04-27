import { getNewsDetailsById } from "@/lib/services";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const NewsDetailsPage = async ({params}) => {
    const {id} = await params;
    const news = await getNewsDetailsById(id);

    console.log("NEWS:", news);

    return (
        <div className="p-2 space-y-2 w-200 container mx-auto">
            <Link href={'/'}>
                <p className="flex items-center gap-2 text-[#706F6F]"><FaLongArrowAltLeft></FaLongArrowAltLeft> Back to Home</p>
            </Link>
            <h2 className="font-bold text-[20px]">{news.title}</h2>
            {news?.image_url && <Image src={news.image_url} alt={news.title}
                width={400} height={400}
                className="w-full"
            ></Image>}
            <p className="text-[16px] text-justify font-semibold text-[#706F6F]">{news.details}</p>
            {/* redirecting click with Link to the news details page? */}
            <Link href={`/category/${news.category_id}`}>
                <p className="flex items-center gap-2 text-[16px] text-orange-400 font-semibold">All news in this category <FaLongArrowAltRight></FaLongArrowAltRight></p>
            </Link>
        </div>
    );
}

export default NewsDetailsPage;