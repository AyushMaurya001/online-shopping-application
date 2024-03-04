import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function HeaderPosters() {
  return (
    <div className=" bg-muted py-3 w-full h-72 flex justify-center items-center" >
        <div className=" bg-background w-full h-64 flex justify-center items-center">
            <Carousel className='w-11/12 h-60 rounded-sm'>
                <CarouselContent className='h-60 bg-red-500' >
                    <CarouselItem className=' bg-yellow-400'></CarouselItem>
                    <CarouselItem className=' bg-red-500'></CarouselItem>
                    <CarouselItem className='bg-pink-500'></CarouselItem>
                    <CarouselItem className='bg-black'></CarouselItem>
                </CarouselContent>
                <CarouselPrevious className=' h-full rounded-sm w-10' />
                <CarouselNext className=' h-full rounded-sm w-10' />
            </Carousel>
        </div>
    </div>
  )
}

