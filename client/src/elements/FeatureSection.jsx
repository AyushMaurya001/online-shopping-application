import SectionTitle from "./SectionTitle";


export default function FeatureSection() {

    return (
        <div className=" w-full h-48 flex justify-center items-center">

            <div className=" w-[30%] ">
                <div className=" w-full h-full flex gap-2 flex-col justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className=" w-14 fill-primary"><path d="M17 8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8ZM17 10V13H21V12.715L18.9917 10H17Z"></path></svg>
                    <SectionTitle title="FREE & FAST DELIVERY" description="Shipping within 48 hours across India." className=" font-medium gap-1" titleClassName=" text-lg" descriptionClassName=" text-sm" />
                </div>
            </div>
            <div className=" w-[30%] ">
                <div className=" w-full h-full flex gap-2 flex-col justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className=" w-14 fill-primary"><path d="M12 4C14.5905 4 16.8939 5.23053 18.3573 7.14274L16 9.5H22V3.5L19.7814 5.71863C17.9494 3.452 15.1444 2 12 2 6.47715 2 2 6.47715 2 12H4C4 7.58172 7.58172 4 12 4ZM20 12C20 16.4183 16.4183 20 12 20 9.40951 20 7.10605 18.7695 5.64274 16.8573L8 14.5 2 14.5V20.5L4.21863 18.2814C6.05062 20.548 8.85557 22 12 22 17.5228 22 22 17.5228 22 12H20Z"></path></svg>
                    <SectionTitle title="RETURN POLICY" description="Returns with 7 days." className=" font-medium gap-1" titleClassName=" text-lg" descriptionClassName=" text-sm" />
                </div>
            </div>
            <div className=" w-[30%] ">
                <div className=" w-full h-full flex gap-2 flex-col justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className=" w-14 fill-primary"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path></svg>
                    <SectionTitle title="CONTACT US" description="Write us at virtual.mail.of@gmail.com" className=" font-medium gap-1" titleClassName=" text-lg" descriptionClassName=" text-sm" />
                </div>
            </div>

        </div>
    )

}