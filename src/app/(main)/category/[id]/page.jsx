import LeftSideBar from "@/components/homepage/LeftSideBar";
import NewsCard from "@/components/homepage/NewsCard";
import RightSideBAr from "@/components/homepage/RightSideBar";
import { getCategories, getNewsByCategoryId } from "@/lib/services";

const NewsAndCategoryPage = async ({params}) => {
    const {id} = await params;
    const allCategories = await getCategories();
    const allNews = await getNewsByCategoryId(id);

    return ( 
        <div className="container mx-auto mt-4 grid grid-cols-12 gap-6">
            <div className="col-span-3">
                <LeftSideBar
                allCategories={allCategories}
                id={id}
                ></LeftSideBar>
            </div>

            <div className="col-span-6">
                <h2 className="text-2xl font-semibold text-[#403F3F]">Dragon News Home</h2>
                <div>
                    {
                        allNews.map(news=>
                            <NewsCard key={news._id} news={news}></NewsCard>
                        )
                    }
                </div>
            </div>

            <div className="col-span-3">
                <RightSideBAr></RightSideBAr>
            </div>
        </div>
     );
}
 
export default NewsAndCategoryPage;