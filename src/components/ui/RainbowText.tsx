import React from "react";
import { cn } from "@/lib/utils";
import { Colors } from "@/lib/constants";

interface RainbowTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    text: string;
}

export const RainbowText = React.forwardRef<HTMLSpanElement, RainbowTextProps>(
    ({ text, className, style, ...props }, ref) => {
        const gradientColors = Colors.rainbow.join(", ");

        return (
            <span
                ref={ref}
                className={cn(
                    "bg-clip-text text-transparent bg-contain bg-no-repeat",
                    className
                )}
                style={{
                    backgroundImage: `linear-gradient(to right, ${gradientColors})`,
                    ...style,
                }}
                {...props}
            >
                {text}
            </span>
        );
    }
);

RainbowText.displayName = "RainbowText";
