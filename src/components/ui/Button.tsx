import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "ghost" | "solid";
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "solid",
  onClick,
  disabled = false,
}) => {
  const baseStyles =
    "px-4 py-2 rounded focus:outline-none transition duration-200";
  const variantStyles =
    variant === "ghost"
      ? "bg-transparent text-gray-300 hover:bg-gray-800"
      : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
