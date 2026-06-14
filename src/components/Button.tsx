import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";


type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
    size?: 'sm';
}

const classes = cva('border rounded-full px-6 font-medium', {
    variants: {
        variant: {
            primary: 'bg-lime-400 text-neutral-950 border-lime-400',
            secondary: 'border-foreground bg-transparent'
        },
        size: {
            sm: "h-10",
            md: "h-12",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
    }
});

export default function Button(props: Props) {
    const { children, variant, className, size, ...otherProps } = props;
    return (
        <button 
            className={classes({ 
                variant, 
                className,
                size
            })}  
            {...otherProps}
        >{children}</button>
    );
}
