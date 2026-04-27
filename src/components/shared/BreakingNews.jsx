import Marquee from "react-fast-marquee";

const breakingNews = [
  {
    "id": 1,
    "title": "Iran's FM arrives in Russia as Strait of Hormuz remains closed"
  },
  {
    "id": 2,
    "title": "War and neglect fuel deadly measles epidemic in Sudan's Darfur"
  },
  {
    "id": 3,
    "title": "Southern Lebanon's displaced face grim future"
  },
  {
    "id": 4,
    "title": "US and Iran's demands to end the war are poles apart"
  },
  {
    "id": 5,
    "title": "Mali's Defence Minister Sadio Camara killed during coordinated attacks"
  },
  {
    "id": 6,
    "title": "Former Israeli PMs Bennett, Lapid unite to challenge Netanyahu in elections"
  }
]

const BreakingNews = () => {
    return (
        <div className="container mx-auto bg-gray-100 p-3 flex items-center gap-4 mt-4">
            <button className="btn bg-red-500 text-white">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                {
                    breakingNews.map(bnews=>
                        <span key={bnews.id} className="mx-6 font-semibold text-[18px] text-[#403F3F]">{bnews.title}</span>
                    )
                }
            </Marquee>
        </div>
    );
}

export default BreakingNews;