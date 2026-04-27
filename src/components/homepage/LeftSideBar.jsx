import Link from "next/link";

const LeftSideBar = ({ allCategories, activeId }) => {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-[#403F3F]">All Caterogy</h2>
            <div className='mt-4 flex flex-col justify-center gap-4 text-xl font-semibold text-[#403f3fbf]'>
                {
                    allCategories.map(category =>
                        <Link href={`/category/${category.category_id}`} key={category.category_id}
                        className={`${activeId===category.category_id ? 'bg-gray-200 p-2 rounded-lg' : ''}`}
                        >{category.category_name}</Link>
                    )
                }
            </div>
        </div>
    );
}

export default LeftSideBar;