

export default function BasicCard({ title, imageLink }) {

    return (
        <div className=" relative w-[420px] h-[450px] rounded-sm text-background  font-medium text-4xl flex justify-center items-center overflow-hidden" >
            <p className="z-[1]">{title}</p>
            <div className=" w-full h-full absolute bg-cover bg-no-repeat bg-center hover:scale-110 transition-all duration-500 " style={{
            backgroundImage: `url(${imageLink})`
            }}></div>
        </div>
    )

}