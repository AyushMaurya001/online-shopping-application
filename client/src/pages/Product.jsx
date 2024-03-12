import { FeatureSection, Footer, Navbar, StickyNavBar } from "@/elements";
import { Separator } from "@radix-ui/react-dropdown-menu";


export default function Product() {

    return (
        <div>
            <Navbar />
            <Separator className="w-[95%] " />
            <StickyNavBar />

            <div>Product Section</div>

            <FeatureSection />
            <Footer />
        </div>
    )

}