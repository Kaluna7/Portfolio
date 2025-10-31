interface ProjectProps {
    icon : string,
    title : string,
    description : string,
    technology : string[]
}

export function ProjectBar({icon ,title, description, technology} : ProjectProps){
    return(
        <div className="flex flex-col border-2">
            <img src={icon} />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="border-2">
                {technology.map((t , i) =>(
                    <span key={i} className="border-2">{t}</span>
                ))}
            </div>
        </div>
    );
}