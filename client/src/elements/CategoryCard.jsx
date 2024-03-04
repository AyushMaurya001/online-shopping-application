

export default function CategoryCard({ url, title }) {

    return (
        <div className=" border border-white flex flex-col justify-center items-center">
            <div className={` w-20 h-20 bg-cover bg-center`} style={{
                backgroundImage: `url(${url})`
            }}>
                
            </div>
            <div>
                {title}
            </div>
        </div>
    )
}