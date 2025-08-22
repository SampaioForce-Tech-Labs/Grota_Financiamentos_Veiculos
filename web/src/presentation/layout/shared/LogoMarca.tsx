import React from "react";
import { Car } from "lucide-react";

interface LogoMarcaProps {
  size: number;
  withText?: boolean;
  className?: string;
}

const LogoMarca: React.FC<LogoMarcaProps> = ({
  size,
  withText = true,
  className = "",
}) => (
  <span className={`flex items-center space-x-2 ${className}`}>
    <span className="p-1 bg-orange-500 text-white font-semibold rounded-md">
      <Car size={size} />
    </span>
    {withText && (
      <span className="text-xl font-bold text-black">
        Logo<span className="text-orange-500">Marca</span>
      </span>
    )}
  </span>
);

export default LogoMarca;
