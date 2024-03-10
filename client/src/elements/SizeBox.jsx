import { useState } from "react"


export default function BoxElement({ size, item, className }){

    const [stockStatus, setStockStatus] = useState(false);

    return (
        <div className={` relative flex justify-center items-center ${className}`}>
            <button className={` m-1 w-10 h-10 bg-transparent border font-semibold border-black flex justify-center items-center transition-all duration-300 ${item>0?'hover:bg-foreground hover:text-background':'text-muted-foreground border-muted-foreground line-through hover:bg-muted-foreground hover:text-background'}`} onMouseEnter={() => {
                setStockStatus(true);
            }} onMouseLeave={() => {
                setStockStatus(false);
            }}>
                {size}
            </button>
            {stockStatus===true?
            item>0?
            <div className=" absolute -top-7 left-1 w-[80px] p-2 bg-foreground text-primary-foreground font-medium text-left">
                In stock
            </div>:
            <div className=" absolute -top-7 left-1 w-[115px] p-2 bg-muted-foreground text-primary-foreground font-medium text-left">
                Out of stock
            </div>:
            null}
            
        </div>
    )

}