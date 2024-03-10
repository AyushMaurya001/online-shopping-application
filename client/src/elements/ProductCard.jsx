import SizeBox from "./SizeBox";

export default function ProductCard({ imageLink, name, price, sizeAndItem, className, index }){

    return (
        <div className={` flex flex-col items-center justify-between ${className}`}>
            <div style={{
                backgroundImage: `url(${imageLink})`
            }} className=" w-[320px] h-[500px] bg-no-repeat bg-center bg-cover rounded-md ">
            </div>
            <div className=" h-[170px] w-[90%] flex flex-col justify-center items-center font-medium">
                <p className="text-center h-10">
                    {name}
                </p>
                <div className=" pt-2 flex gap-4 justify-center items-center flex-col" >
                    <p>
                        ₹{price}.00
                    </p>
                    <div className="h-12 flex justify-center items-center">
                        {sizeAndItem.map((sizeAndItem, index) => <SizeBox size={sizeAndItem.size} item={sizeAndItem.item} className=" w-full h-20" key={index} /> )}
                    </div>
                </div>
            </div>
        </div>
    )

    

}