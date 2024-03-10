import { Input } from "@/components/ui/input";
import SectionTitle from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function SignupElement({ className }) {

    const [btnHoverStatus, setBtnHoverStatus] = useState(false);

    const navigate = useNavigate();

    return (
        <div className={` flex flex-col justify-center items-center ${className} `}>
            
            <SectionTitle title="Sign Up" description="Please enter your details below" className=" my-10" />
            <div className=" w-full flex flex-col justify-center items-center gap-5">
                <Input className=" h-12 w-[30%] rounded-sm border-2 invalid:border-destructive focus:valid:ring-ring focus:invalid:ring-destructive text-lg" type="text" placeholder="First Name" />
                <Input className=" h-12 w-[30%] rounded-sm border-2 invalid:border-destructive focus:valid:ring-ring focus:invalid:ring-destructive text-lg" type="text" placeholder="Last Name" />
                <Input className=" h-12 w-[30%] rounded-sm border-2 invalid:border-destructive focus:valid:ring-ring focus:invalid:ring-destructive text-lg" type="email" placeholder="Email" />
                <Input className=" h-12 w-[30%] rounded-sm border-2 invalid:border-destructive focus:valid:ring-ring focus:invalid:ring-destructive text-lg" type="password" placeholder="Password" />
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
                Already have an account?
                <p className=" border-b border-black cursor-pointer" onClick={() => {
                    navigate('/signup');
                }}>Login</p>
            </div>

        </div>
    )

}