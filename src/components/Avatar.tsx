import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Prop = HTMLAttributes<HTMLDivElement>;

export default function Avatar(prop: Prop) {
    const { className, children, ...otherProps } = prop;
    return (
        <div className={twMerge("size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-900", className)} {...otherProps}>
            {children}
        </div>
    );
}
