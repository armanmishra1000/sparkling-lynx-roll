import React from "react";
import { cn } from "@/lib/utils";
import { Colors } from "@/lib/constants";

interface RainbowBorderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    borderWidth?: number;
    borderRadius?: number;
    innerClassName?: string;
    innerStyle?: React.CSSProperties;
}

export const RainbowBorder = React.forwardRef<HTMLDivElement, RainbowBorderProps>(
    ({
        children,
        className,
        borderWidth = 2,
        borderRadius = 0,
        style,
        innerClassName,
        innerStyle,
        ...props
    }, ref) => {
        const gradientColors = Colors.rainbow.join(", ");

        return (
            <div
                ref={ref}
                className={cn("relative overflow-hidden inline-block", className)}
                style={{
                    background: `linear-gradient(to right, ${gradientColors})`,
                    padding: `${borderWidth}px`,
                    borderRadius: `${borderRadius}px`,
                    ...style,
                }}
                {...props}
            >
                <div
                    className={cn("bg-white h-full w-full", innerClassName)}
                    style={{
                        borderRadius: `${Math.max(0, borderRadius - borderWidth)}px`,
                        ...innerStyle
                    }}
                >
                    {children}
                </div>
            </div>
        );
    }
);
RainbowBorder.displayName = "RainbowBorder";
