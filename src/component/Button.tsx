type Props = {
  type: "button" | "submit" | "reset" | undefined;
  className: string;
  text: string;
  onClick?: () => void;
  isDisabled?: boolean;
};
 const Button = ({ type, className, text, onClick, isDisabled }: Props) => {
  return (
    <div>
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
    </div>
  );
};
export default Button