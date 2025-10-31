interface skillProps {
    icon : string,
    name : string
}

export function SkillIcon({icon , name} : skillProps){
    return(
        <div className="flex flex-col items-center justify-center gap-3 p-3">
            <img src={icon} className="border-2 border-white rounded-2xl"/>
            <h3 className="text-2xl">{name}</h3>
        </div>
    );
}