import { useNavigate } from "react-router-dom"


export default function SectionTitle({ title, description, className, titleClassName, descriptionClassName, onClick }){

    const navigate = useNavigate();

    return (
        <div className={` text-primary font-medium text-center flex flex-col gap-3 ${className} `} >

            <p className={` uppercase text-5xl ${titleClassName} `} onClick={() => {
                navigate(onClick);
            }}>{title}</p>
            <p className={` text-lg ${descriptionClassName} `}>{description}</p>
            
        </div>
    )

}