interface myProps {
    title : string,
    to : string,
    style : string
}

export function Button({to,title,style} : myProps){
    return(
        <a href={to} className={style}>{title}</a>
    );
}