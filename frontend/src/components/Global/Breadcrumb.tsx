export default function Breadcrumb({title,className,style}:{title:string,className?:string,style?:any}) {
    return (
       <>
        <h1 style={style} className={`text-4xl font-extrabold absolute ${className}`}>{title || "Home"}</h1>
       </>
    )
}