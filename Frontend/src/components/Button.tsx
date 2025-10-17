import React from "react";

interface ButtonProps {
  label: string;
  color?: "blue" | "red" | "green" | "purple" | "cyan"|"pink";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  label,
  color = "blue",
  onClick,
  disabled = false,
  className = "",
  type = "submit", 
}) => {
  const colors: Record<string, string> = {
    blue: "bg-blue-600 hover:bg-blue-700",
    red: "bg-red-600 hover:bg-red-700",
    green: "bg-green-600 hover:bg-green-700",
    purple: "bg-purple-600 hover:bg-purple-700",
  };

  return (
    <button
      type={type} 
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 ${
        disabled ? "bg-gray-400 cursor-not-allowed" : colors[color]
      } ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
