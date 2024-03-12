import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import ProductCard from "@/elements/ProductCard";
import { useState } from "react";
import SectionTitle from "./SectionTitle";

export default function ProductList({ className, title }){

    const products = [{
        imageLink: 'https://overlays.co/cdn/shop/files/20230805-DSC03525.jpg?v=1692105098&width=400',
        name: 'Ultra Soft Oversized Phoenix T-shirt',
        price: 999,
        sizeAndItem: [{
            size: 'XS',
            item: 4,
        }, {
            size: 'S',
            item: 2,
        }, {
            size: 'M',
            item: 0,
        }, {
            size: 'L',
            item: 2,
        }, {
            size: 'XL',
            item: 0,
        }, {
            size: 'XXL',
            item: 3,
        }]
    }, {
        imageLink: 'https://overlays.co/cdn/shop/files/20230805-DSC03852.jpg?v=1691771886&width=400',
        name: 'Textured Regular Fit Navy Blue Pique T-shirt',
        price: 639,
        sizeAndItem: [{
            size: 'XS',
            item: 4,
        }, {
            size: 'S',
            item: 2,
        }, {
            size: 'M',
            item: 0,
        }, {
            size: 'L',
            item: 2,
        }, {
            size: 'XL',
            item: 0,
        }, {
            size: 'XXL',
            item: 3,
        }]
    }, {
        imageLink: 'https://overlays.co/cdn/shop/files/20230805-DSC03525.jpg?v=1692105098&width=400',
        name: 'Ultra Soft Oversized Phoenix T-shirt',
        price: 999,
        sizeAndItem: [{
            size: 'XS',
            item: 4,
        }, {
            size: 'S',
            item: 2,
        }, {
            size: 'M',
            item: 0,
        }, {
            size: 'L',
            item: 2,
        }, {
            size: 'XL',
            item: 0,
        }, {
            size: 'XXL',
            item: 3,
        }]
    }, {
        imageLink: 'https://overlays.co/cdn/shop/files/20230805-DSC03852.jpg?v=1691771886&width=400',
        name: 'Textured Regular Fit Navy Blue Pique T-shirt',
        price: 639,
        sizeAndItem: [{
            size: 'XS',
            item: 4,
        }, {
            size: 'S',
            item: 2,
        }, {
            size: 'M',
            item: 0,
        }, {
            size: 'L',
            item: 2,
        }, {
            size: 'XL',
            item: 0,
        }, {
            size: 'XXL',
            item: 3,
        }]
    }, {
        imageLink: 'https://overlays.co/cdn/shop/files/20230805-DSC03852.jpg?v=1691771886&width=400',
        name: 'Textured Regular Fit Navy Blue Pique T-shirt',
        price: 639,
        sizeAndItem: [{
            size: 'XS',
            item: 4,
        }, {
            size: 'S',
            item: 2,
        }, {
            size: 'M',
            item: 0,
        }, {
            size: 'L',
            item: 2,
        }, {
            size: 'XL',
            item: 0,
        }, {
            size: 'XXL',
            item: 3,
        }]
    }, {
        imageLink: 'https://overlays.co/cdn/shop/files/20230805-DSC03852.jpg?v=1691771886&width=400',
        name: 'Textured Regular Fit Navy Blue Pique T-shirt',
        price: 639,
        sizeAndItem: [{
            size: 'XS',
            item: 4,
        }, {
            size: 'S',
            item: 2,
        }, {
            size: 'M',
            item: 0,
        }, {
            size: 'L',
            item: 2,
        }, {
            size: 'XL',
            item: 0,
        }, {
            size: 'XXL',
            item: 0,
        }]
    },]

    const [buttonVisible, setButtonVisible] = useState(false);

    return (
        <div className={` relative h-full w-[450px] px-10 flex flex-col items-center overflow-hidden `} onMouseEnter={() => {
            setButtonVisible(true);
        }} onMouseLeave={() => {
            setButtonVisible(false);
        }}>

            <SectionTitle title={title} className={` w-full my-7 text-center`} />

            <Carousel className='h-full w-[400px]'>
                <CarouselContent className=' h-full w-[400px]' >
                    {products.map((product, index) => (
                    <CarouselItem>
                        <ProductCard imageLink={product.imageLink} name={product.name} price={product.price} sizeAndItem={product.sizeAndItem} className=' w-[400px] h-full' index={index} key={index} />
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className={` w-14 h-14 rounded-none border-2 left-3 top-[35%] ${buttonVisible===false?" hidden":""} `} />
                <CarouselNext className={` w-14 h-14 rounded-none border-2 right-3 top-[35%] ${buttonVisible===false?" hidden":""} `} />
            </Carousel>


        </div>
    )

}