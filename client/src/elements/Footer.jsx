import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function Footer(){

    const [emailInputFocus, setEmailInputFocus] = useState(false);

    const [social1Status, setSocial1Status] = useState(false);
    const [social2Status, setSocial2Status] = useState(false);
    const [social3Status, setSocial3Status] = useState(false);
    const [social4Status, setSocial4Status] = useState(false);

    return (
        <div className=" w-full h-96 bg-muted flex justify-center items-center">
            <div className=" w-[25%] h-full px-10 py-7 gap-5 flex flex-col items-start">
                <Title title="ABOUT US" />
                <div className=" flex flex-col gap-1 items-start">
                    <Content content="ShopKro Pvt Ltd" />
                    <Content content="Explore to CHANGE." />
                </div>
            </div>
            <div className=" w-[25%] h-full px-10 py-7 gap-5 flex flex-col items-start">
                <Title title="POLICIES" />
                <div className=" flex flex-col gap-1 items-start">
                    <Content content="Return Your Order" />
                    <Content content="Shipping Policy" />
                    <Content content="Return, Refund, and Cancellation" />
                    <Content content="Terms and Conditions" />
                    <Content content="Privacy Policy" />
                    <Content content="Fraud Protection" />
                </div>
            </div>
            <div className=" w-[25%] h-full px-10 py-7 gap-5 flex flex-col items-start">
                <Title title="NEWSLETTER" />
                <Content content="You can be the first one to know about our new releases, latest offers and more. Sign up now!" />
                <div className={` flex justify-start items-center w-[90%] h-10 border rounded-sm border-muted-foreground `}>

                    <Input className={` h-10 placeholder:font-medium border-0 bg-transparent focus:ring-0 focus-visible:ring-0 placeholder:text-lg font-medium rounded-none w-[80%] text-lg `} placeholder="Your Email" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className=" w-[20%] h-7 fill-muted-foreground"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>

                </div>
            </div>
            <div className=" w-[25%] h-full px-10 py-7 gap-5 flex flex-col items-start">
                <Title title="FOLLOW US" />
                <Content content="Stay in touch!" />
                <div className=" flex items-center w-full">
                    <div className={` relative w-16 h-16 flex justify-center items-center border border-muted-foreground transition-all duration-300 overflow-hidden`} onMouseEnter={() => {
                        setSocial1Status(true);
                    }} onMouseLeave={() => {
                        setSocial1Status(false);
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={` z-10 h-6 fill-primary transition-all duration-300 ${social1Status===true?" fill-secondary":""}`}><path d="M13 9H17.5L17 11H13V20H11V11H7V9H11V7.12777C11 5.34473 11.1857 4.69816 11.5343 4.04631C11.8829 3.39446 12.3945 2.88288 13.0463 2.53427C13.6982 2.18565 14.3447 2 16.1278 2C16.6498 2 17.1072 2.05 17.5 2.15V4H16.1278C14.8041 4 14.401 4.07784 13.9895 4.29789C13.6862 4.46011 13.4601 4.68619 13.2979 4.98951C13.0778 5.40096 13 5.80407 13 7.12777V9Z"></path></svg>
                        <div className={` absolute w-16 h-16 bg-primary transition-all duration-300 ${social1Status===true?" top-0":"top-[100%] "} `}></div>
                    </div>
                    <div className={` relative w-16 h-16 flex justify-center items-center border border-muted-foreground transition-all duration-300 overflow-hidden`} onMouseEnter={() => {
                        setSocial2Status(true);
                    }} onMouseLeave={() => {
                        setSocial2Status(false);
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={` z-10 h-6 fill-primary transition-all duration-300 ${social2Status===true?"fill-secondary":""}`}><path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path></svg>
                        <div className={` absolute w-16 h-16 bg-primary transition-all duration-300 ${social2Status===true?" top-0":"top-[100%] "} `}></div>
                    </div>
                    <div className={` relative w-16 h-16 flex justify-center items-center border border-muted-foreground transition-all duration-300 overflow-hidden`} onMouseEnter={() => {
                        setSocial3Status(true);
                    }} onMouseLeave={() => {
                        setSocial3Status(false);
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={` z-10 h-6 fill-primary transition-all duration-300 ${social3Status===true?"fill-secondary":""}`}><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path></svg>
                        <div className={` absolute w-16 h-16 bg-primary transition-all duration-300 ${social3Status===true?" top-0":"top-[100%] "} `}></div>
                    </div>
                    <div className={` relative w-16 h-16 flex justify-center items-center border border-muted-foreground transition-all duration-300 overflow-hidden`} onMouseEnter={() => {
                        setSocial4Status(true);
                    }} onMouseLeave={() => {
                        setSocial4Status(false);
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={` z-10 h-6 fill-primary transition-all duration-300 ${social4Status===true?"fill-secondary":""}`}><path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"></path></svg>
                        <div className={` absolute w-16 h-16 bg-primary transition-all duration-300 ${social4Status===true?" top-0":"top-[100%] "} `}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Title({ title }){
    return (
        <p className=" font-semibold">
            {title}
        </p>
    )
}

function Content({ content }){
    return (
        <p>
            {content}
        </p>
    )
}