type Props = {
  path: string;
  className: string;
  title: string;
  id?: string;
  toggel?: string;
  role?: string;
  controls?: string;
  selected?: boolean;
};

const Links = ({
  path,
  className,
  title,
  id,
  toggel,
  role,
  controls,
  selected,
}: Props) => {
  return (
    <a
      className={className}
      href={path}
      id={id}
      data-toggle={toggel}
      role={role}
      aria-controls={controls}
      aria-selected={selected}
    >
      {title}
    </a>
  );
};
export default Links