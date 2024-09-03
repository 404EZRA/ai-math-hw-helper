import { ReactNode } from "react";

interface ButtonProps {
    children: string | ReactNode;
    onClick: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
        type="button"
        className="btn bg-transparent"
        onClick={onClick}
    >
            {children}
    </button>
  )
}

export default Button;
