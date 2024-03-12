import BasicCard from "./BasicCard";
import SectionTitle from "./SectionTitle";

export default function CategorySection(){

    const categories = [{
        title: "Polos",
        imageLink: "https://overlays.co/cdn/shop/files/polo.jpg?v=1703314280&width=600",
    }, {
        title: "Shirts",
        imageLink: "https://overlays.co/cdn/shop/files/shirts.jpg?v=1703314281&width=800",
    }, {
        title: "T-shirts",
        imageLink: "https://overlays.co/cdn/shop/files/tshirts.jpg?v=1703314947&width=600",
    }, {
        title: "Joggers",
        imageLink: "https://overlays.co/cdn/shop/files/joggers.jpg?v=1703314589&width=600",
    }, {
        title: "Jackets",
        imageLink: "https://overlays.co/cdn/shop/files/jackets.webp?v=1703314280&width=600",
    }, {
        title: "Hoodies",
        imageLink: "https://overlays.co/cdn/shop/files/hoodies.jpg?v=1703314280&width=600",
    }, {
        title: "Sweatshirts",
        imageLink: "https://overlays.co/cdn/shop/files/sweatshirts.jpg?v=1703314281&width=600",
    }, ]

    return (
        <div className=" w-full">
            <SectionTitle title="Categories" className=" my-10 w-full text-center" titleClassName=" cursor-pointer" onClick="/category" />
            <div className=" px-[93px] w-full flex flex-wrap justify-start items-center gap-9">
                {categories.map((category) => <BasicCard title={category.title} imageLink={category.imageLink} />)}
            </div>
        </div>
    )

}