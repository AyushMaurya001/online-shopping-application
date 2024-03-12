import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavButton({ content, className, onClick }) {

    const [navStatus, setNavStatus] = useState(false);

    const navigate = useNavigate();

    return (
        <div className={` font-medium text-lg cursor-pointer flex flex-col ${className} `} onMouseEnter={() => {
            setNavStatus(true);
        }} onMouseLeave={() => {
            setNavStatus(false);
        }}>
            {/* <div className=" inline">
                {content}
            </div> */}
            <Link to={onClick} className=" inline">{content}</Link>
            <div className={` border-t-2 border-transparent transition-all duration-500 ${navStatus===true?'border-t-slate-950':'border-transparent'} ${navStatus===true?'w-full':'w-0'} `}></div>
        </div>
    )

}