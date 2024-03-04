import { Navbar, Footer, Categorybar, HeaderPosters } from "@/elements/index";
import { useNavigate } from "react-router-dom"


export default function Home() {

    const navigate = useNavigate();

    return (
        <div className=" font-[geist] bg-background flex flex-col justify-center items-center">
            <Navbar />
            <Categorybar />
            <HeaderPosters />
            <div className=" w-full h-40 ">

            </div>
            <Footer />
        </div>
    )
}