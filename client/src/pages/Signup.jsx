import { ColorChart, Footer, SignupElement, Navbar, StickyNavBar, FeatureSection } from "@/elements";
import { Separator } from "@radix-ui/react-dropdown-menu";

export default function Signup(){
    return (
        <div className=" font-[geist] bg-background text-foreground flex flex-col justify-center items-center">
            <Navbar />
            <Separator className="w-[95%] " />
            <StickyNavBar />

            <SignupElement className="w-full h-full flex justify-center items-center" />

            <FeatureSection />
            <Footer />
        </div>
    )
}