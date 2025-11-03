import React from "react";

interface ButtonProps {
  title: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  iconTitle?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  title,
  textColor,
  bgColor,
  borderColor,
  iconTitle,
}) => {
  return (
    <div>
      <button
        className="px-5 py-3 rounded-xl w-full hover:text-xl hover: cursor-pointer"
        style={{
          color: `${textColor}`,
          backgroundColor: `${bgColor}`,
          border: `${borderColor}`,
        }}
      >
        <span className="font-medium">{title}</span>
        <span>{iconTitle}</span>
      </button>
    </div>
  );
};

export default Button;
