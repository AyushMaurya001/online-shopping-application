import { Navbar, Footer, HeaderPosters, StickyNavBar, CategorySection, ColorChart, ProductList, FeatureSection } from "@/elements/index";
import { useNavigate } from "react-router-dom"
import { Separator } from "@/components/ui/separator"

export default function Home() {

    const navigate = useNavigate();

    return (
        <div className=" font-[geist] bg-background text-foreground flex flex-col justify-center items-center">
            <Navbar />
            <Separator className="w-[95%] " />
            <StickyNavBar />
            <HeaderPosters className="w-full" />

            <div className=" w-full h-full flex justify-center items-center" >
                <ProductList title="T-Shirt" className=" w-full h-[800px]" />
                <ProductList title="Shirt" className=" w-full h-[800px]" />
                <ProductList title="Jacket" className=" w-full h-[800px]" />
                <ProductList title="Hoodies" className=" w-full h-[800px]" />
            </div>

            <CategorySection />
            <FeatureSection />
            {/* <ColorChart /> */}
            <Footer />
        </div>
    )
}