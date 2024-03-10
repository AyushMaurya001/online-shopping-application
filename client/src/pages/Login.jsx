import { ColorChart, FeatureSection, Footer, LoginElement, Navbar, StickyNavBar } from "@/elements";
import { Separator } from "@radix-ui/react-dropdown-menu";


export default function Login(){
    return (
        <div className=" font-[geist] bg-background text-foreground flex flex-col justify-center items-center">
            <Navbar />
            <Separator className="w-[95%] " />
            <StickyNavBar />

            <LoginElement className="w-full h-full flex justify-center items-center" />

            <FeatureSection />
            <Footer />
        </div>
    )
}