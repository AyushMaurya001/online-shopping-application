import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { useState } from "react";

export default function HeaderPosters({ className }) {

  const [buttonVisible, setButtonVisible] = useState(false);

  const headerPosters = [{
    imageLink: "https://overlays.co/cdn/shop/files/summertdek.jpg?v=1707375929&width=2000"
  }, {
    imageLink: "https://overlays.co/cdn/shop/files/summertdek.jpg?v=1707375929&width=2000"
  }, {
    imageLink: "https://overlays.co/cdn/shop/files/summertdek.jpg?v=1707375929&width=2000"
  }, {
    imageLink: "https://overlays.co/cdn/shop/files/summertdek.jpg?v=1707375929&width=2000"
  }, {
    imageLink: "https://overlays.co/cdn/shop/files/summertdek.jpg?v=1707375929&width=2000"
  }, {
    imageLink: "https://overlays.co/cdn/shop/files/summertdek.jpg?v=1707375929&width=2000"
  }, {
    imageLink: "https://overlays.co/cdn/shop/files/summertdek.jpg?v=1707375929&width=2000"
  }, ]

  return (
    <div className={` bg-background h-64 flex justify-center items-center ${className} `} onMouseEnter={() => {
        setButtonVisible(true);
    }} onMouseLeave={() => {
        setButtonVisible(false);
    }}>
      <Carousel className='w-[96%] h-60'>
        <CarouselContent className='h-60' >
          {headerPosters.map((poster) => (<CarouselItem className=" bg-cover bg-no-repeat " style={{
            backgroundImage: `url(${poster.imageLink})`
          }}></CarouselItem>))}
        </CarouselContent>
        <CarouselPrevious className={` w-14 h-14 rounded-none border-2 -left-7 ${buttonVisible===false?" hidden":""} `} />
        <CarouselNext className={` w-14 h-14 rounded-none border-2 -right-7 ${buttonVisible===false?" hidden":""} `} />
      </Carousel>
    </div>
  )
}

