import React from "react";
import { LucideIcon } from "lucide-react";
import { Colors } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface RainbowIconProps extends React.SVGProps<SVGSVGElement> {
    icon: LucideIcon;
    size?: number | string;
}

export const RainbowIcon = ({ icon: Icon, className, size = 24, ...props }: RainbowIconProps) => {
    return (
        <div className={cn("relative inline-block", className)}>
            <svg width="0" height="0" className="absolute block">
                <defs>
                    <linearGradient id="rainbow-icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        {Colors.rainbow.map((color, index) => (
                            <stop
                                key={index}
                                offset={`${(index / (Colors.rainbow.length - 1)) * 100}%`}
                                stopColor={color}
                            />
                        ))}
                    </linearGradient>
                </defs>
            </svg>
            <Icon
                size={size}
                className={cn(className)}
                style={{ stroke: "url(#rainbow-icon-gradient)" }}
                {...props}
            />
        </div>
    );
};
