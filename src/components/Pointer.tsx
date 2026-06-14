import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";

type Prop = {
    name: string;
    color?: 'red' | 'blue'; 
}

export default function Pointer(props: Prop) {
    const { name, color } = props;
    return (
        <div className="relative">
            <FontAwesomeIcon icon={faArrowPointer} className="h-5 w-5 text-foreground" />
            <div className="absolute top-full left-full">
                <div className={twMerge("inline-flex rounded-full font-bold text-sm bg-blue-500 px-2 rounded-tl-none", color === 'red' && "bg-red-500")}>{name}</div>
            </div>
        </div>
    )
}
