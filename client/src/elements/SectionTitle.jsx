

export default function SectionTitle({ title, description, className, titleClassName, descriptionClassName }){

    return (
        <div className={` text-primary font-medium text-center flex flex-col gap-3 ${className} `}>

            <p className={` uppercase text-5xl ${titleClassName} `}>{title}</p>
            <p className={` text-lg ${descriptionClassName} `}>{description}</p>
            
        </div>
    )

}