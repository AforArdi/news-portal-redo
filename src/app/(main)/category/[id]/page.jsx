import { getCategories, getNews } from "@/lib/services";

const NewsAndCategoryPage = async ({params}) => {
    const {id} = params;
    const allCategories = await getCategories();
    const allNews = await getNews(id);

    console.log(allNews);

    return ( 
        <div className="grid grid-cols-12">
            <div className="col-span-3">
                left side
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