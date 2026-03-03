import React from "react";
import { cn } from "@/lib/utils";
import { Colors } from "@/lib/constants";

interface RainbowGradientProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export const RainbowGradient = React.forwardRef<HTMLDivElement, RainbowGradientProps>(
    ({ className, children, style, ...props }, ref) => {
        // Construct the linear gradient string from the defined colors
        const gradientColors = Colors.rainbow.join(", ");
        const gradientBackground = `linear-gradient(to right, ${gradientColors})`;

        return (
            <div
                ref={ref}
                className={cn("relative overflow-hidden", className)}
                style={{
                    background: gradientBackground,
                    ...style,
                }}
                {...props}
            >
                {children}
            </div>
        );
    }
);
RainbowGradient.displayName = "RainbowGradient";
