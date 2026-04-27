import LeftSideBar from "@/components/homepage/LeftSideBar";
import { getCategories, getNewsByCategoryId } from "@/lib/services";

const NewsAndCategoryPage = async ({params}) => {
    const {id} = await params;
    const allCategories = await getCategories();
    const allNews = await getNewsByCategoryId(id);

    return ( 
        <div className="container mx-auto mt-4 grid grid-cols-12">
            <div className="col-span-3">
                <LeftSideBar
                allCategories={allCategories}
                id={id}
                ></LeftSideBar>
            </div>

            <div className="col-span-6">
                middle
            </div>

            <div className="col-span-3">
                right side
            </div>
        </div>
     );
}
 
export default NewsAndCategoryPage;