interface ButtonProps {
    children: string;
    color?: 'primary' | 'secondary' | 'danger' | 'light';
    onClick: () => void;
};

const Button = ({ children, color = 'light', onClick }: ButtonProps) => {
  return (
    <button
        type="button"
        className={"btn btn-" + color}
        onClick={onClick}
    >
            {children}
    </button>
  )
}

export default Button