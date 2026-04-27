import Link from "next/link";

const LeftSideBar = ({ allCategories, id }) => {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-[#403F3F]">All Caterogy</h2>
            <div className="mt-4 flex flex-col justify-center gap-4 text-xl font-semibold text-[#403f3fbf]">
                {
                    allCategories.map(category =>
                        <Link href={`/category/${id}`} key={category.category_id}>{category.category_name}</Link>
                    )
                }
            </div>
        </div>
    );
}

export default LeftSideBar;