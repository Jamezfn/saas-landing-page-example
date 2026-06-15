import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Prop = HTMLAttributes<HTMLDivElement>

export default function Key(props: Prop) {
    const { className, children, ...otherProps } = props;
    return (
        <div className={twMerge("size-14 bg-foreground inline-flex items-center justify-center rounded-2xl text-xl text-neutral-950 font-medium", className)} { ...otherProps }>
            {children}
        </div>
    );
}
