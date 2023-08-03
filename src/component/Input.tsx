
type Props = {
  name: string;
  placeholder: string;
  type: string;
  multiple?: boolean;
  value?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  className: string;
  id: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const Input = ({
  name,
  placeholder,
  type,
  multiple,
  value,
  onBlur,
  className,
  id,
  onChange,
}: Props) => {
  return (
    <>
      <input
        type={type}
        className={className}
        placeholder={placeholder ? placeholder : ""}
        aria-label={name}
        name={name}
        multiple={multiple}
        value={value}
        onBlur={onBlur}
        id={id}
        onChange={onChange}
      />
    </>
  );
};
export default Input;
