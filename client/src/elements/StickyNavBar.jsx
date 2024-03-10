import NavButton from "./NavButton";


export default function StickyNavBar() {

    return (
        <div className=" z-10 h-12 w-full flex justify-center items-center backdrop-blur supports-[backdrop-filter]:bg-background/70 sticky top-0">
            <div className=" h-full w-full flex justify-center items-center gap-8">
                <NavButton content='Home' />
                <NavButton content='Categories' />
                <NavButton content='Sale' />
                <NavButton content='Get in Touch!' />
            </div>
        </div>
    )

}