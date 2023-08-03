type Props = {
  name: string;
};

 const Label = ({ name }: Props) => {
  return <label htmlFor={name}>{name}</label>;
};
export default Label