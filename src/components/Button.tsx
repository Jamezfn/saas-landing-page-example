import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";


type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
}

const classes = cva('border h-12 rounded-full px-6 font-medium', {
    variants: {
        variant: {
            primary: 'bg-lime-400 text-neutral-950 border-lime-400',
            secondary: 'border-foreground bg-transparent'
        }
    }
});

export default function Button(props: Props) {
    const { children, variant="primary", className, ...OtherProps } = props;
    return (
        <button 
            className={classes({ 
                variant: variant, 
                className: className 
            })}  
            {...OtherProps}
        >{children}</button>
    );
}
