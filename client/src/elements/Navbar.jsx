import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom"
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarShortcut, MenubarSeparator, } from "@/components/ui/menubar"
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";

export default function Navbar(){

    const navigate = useNavigate();

    return (

        <div className=" h-24 w-full flex justify-center items-center">
            <div className=" flex justify-start items-center w-2/5 h-full">
                <div className=" flex justify-start items-center ml-7 w-full h-full">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className=" h-7"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>

                    <Input className=" h-10 placeholder:font-medium border-0 bg-transparent focus:ring-0 focus-visible:ring-0 placeholder:text-lg font-medium text-foreground w-96 text-lg" placeholder="What are you looking for?" />

                </div>
            </div>
            <div className="flex justify-center items-center w-1/5 ">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="cursor-pointer h-12 fill-muted-foreground hover:fill-foreground transition-all duration-500" onClick={() => {
                    navigate('/')
                }}><path d="M12.0002 2C15.8662 2 19.0002 5.13401 19.0002 9H20.0742C20.5967 9 21.0311 9.40231 21.0712 9.9233L21.9174 20.9233C21.9597 21.474 21.5477 21.9547 20.997 21.9971L20.9203 22H3.08008C2.52779 22 2.08008 21.5523 2.08008 21L2.08302 20.9233L2.92918 9.9233C2.96925 9.40231 3.4037 9 3.92623 9H5.0002C5.0002 5.13401 8.13421 2 12.0002 2ZM14.0002 13H10.0002V15H14.0002V13ZM12.0002 4C9.31145 4 7.11838 6.12231 7.00482 8.78311L7.0002 9H17.0002C17.0002 6.31124 14.8779 4.11818 12.2171 4.00462L12.0002 4Z"></path></svg>

            </div>
            <div className=" flex justify-end items-center w-2/5">
                <div className=" flex justify-end items-center gap-7 mr-10 w-full">
                    <Menubar className={` border-none bg-transparent`}>
                        <MenubarMenu className='bg-transparent ' >
                            <MenubarTrigger className=' bg-transparent'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className=" h-7 cursor-pointer"><path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path></svg>
                            </MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem onClick={() => {
                                    navigate('/login')
                                }}>
                                    Log In
                                </MenubarItem>
                                <MenubarItem onClick={() => {
                                    navigate('/signup')
                                }}>
                                    Sign Up
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 cursor-pointer"><path d="M6.00488 9H19.9433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V9ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg>

                </div>
            </div>
        </div>
        
        


    )
}