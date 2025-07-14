import React from "react";
import { LucideIcon } from "lucide-react";

interface CTAButtonProps {
  label: string;
  Icon: LucideIcon;
  iconSize?: number;
  onClick?: () => void;
  className?: string;
  bgColor?: string;
  hoverBgColor?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  label,
  Icon,
  iconSize = 24,
  onClick,
  className = "",
  bgColor = "bg-orange-500",
  hoverBgColor = "hover:bg-orange-600",
}) => {
  return (
    <button
      className={`flex items-center h-10 text-white md:text-sm font-semibold rounded-xl cursor-pointer px-3 gap-x-1 shadow-lg ${bgColor} ${hoverBgColor} ${className}`}
      onClick={onClick}
    >
      <Icon size={iconSize} />
      {label}
    </button>
  );
};

export default CTAButton;
