import { Input } from "@/components/ui/input";
import SectionTitle from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function LoginElement({ className }) {

    const [btnHoverStatus, setBtnHoverStatus] = useState(false);

    const navigate = useNavigate();

    return (
        <div className={` flex flex-col justify-center items-center ${className} `}>
            
            <SectionTitle title="Login" description="Please enter your e-mail and password" className=" my-10" />
            <div className=" w-full flex flex-col justify-center items-center gap-5">
                <Input className=" h-12 w-[30%] rounded-sm border-2 invalid:border-destructive focus:valid:ring-ring focus:invalid:ring-destructive text-lg" type="email" placeholder="Email" />
                <div className=" relative w-[30%] h-12 flex justify-center">
                    <Input className=" h-12 w-full rounded-sm border-2 invalid:border-destructive focus:valid:ring-ring focus:invalid:ring-destructive text-lg" type="password" placeholder="Password" />
                    <p className=" absolute right-[3%] top-[30%] text-sm cursor-pointer bg-transparent border-b border-black">Forget Password?</p>
                </div>
                <Button className=" relative h-12 w-[30%] rounded-sm text-lg font-light overflow-hidden bg-primary hover:bg-primary " onMouseEnter={() => {
                    setBtnHoverStatus(true);
                }} onMouseLeave={() => {
                    setBtnHoverStatus(false);
                }} >
                    <p className=" z-[1]">Login</p>
                    <div className={` absolute w-full h-full rounded-sm bg-blue-800 top-[100%] transition-all duration-300 ${btnHoverStatus===true?"top-[0%]":""} `}></div>
                </Button>
            </div>
            <div className=" flex gap-2 pt-4 ">
                New customer? 
                <p className=" border-b border-black cursor-pointer" onClick={() => {
                    navigate('/signup');
                }}>Create an account</p>
            </div>

        </div>
    )

}