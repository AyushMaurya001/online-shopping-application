import { useState } from "react";


export default function NavButton({ content, className }) {

    const [navStatus, setNavStatus] = useState(false);

    return (
        <div className={` font-medium text-lg cursor-pointer flex flex-col ${className} `} onMouseEnter={() => {
            setNavStatus(true);
        }} onMouseLeave={() => {
            setNavStatus(false);
        }}>
            <div className=" inline">
                {content}
            </div>
            <div className={` border-t-2 border-transparent transition-all duration-500 ${navStatus===true?'border-t-slate-950':'border-transparent'} ${navStatus===true?'w-full':'w-0'} `}></div>
        </div>
    )

}