import { useState } from "react"


export default function BasicCard({ title, imageLink }) {

    const [hoverStatus, setHoverStatus] = useState(false);

    return (
        <div className={` relative w-[420px] h-[450px] rounded-sm text-background  font-medium text-4xl flex justify-center items-center overflow-hidden `} onMouseEnter={() => {
            setHoverStatus(true);
        }} onMouseLeave={() => {
            setHoverStatus(false);
        }}>
            <p className="z-[1]">{title}</p>
            <div className={` w-full h-full absolute bg-cover bg-no-repeat bg-center transition-all duration-500 ${hoverStatus===true?"scale-110":""} `} style={{
            backgroundImage: `url(${imageLink})`
            }}></div>
        </div>
    )

}