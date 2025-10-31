import { dataLink } from "./Navbar-config";
import { Button } from "../../features/button";
export default function Navbar(){

    return(
        <div className="bg-black h-14 w-3xl text-white mt-3 rounded-2xl px-8 flex flex-row justify-between items-center sticky">
            <h1>Logo</h1>
                <div className="gap-6 flex flex-row">
                    {dataLink.map((items , index) => (
                        <Button key={index} {...items} style=""/>
                    ))}
                </div>
        </div>
    );
}