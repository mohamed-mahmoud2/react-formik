import { ReactNode } from 'react'

type Props = {
    children: ReactNode;
    onSubmit?: () =>void;
}

const Form = ({children,onSubmit}: Props) => {
  return (
    <form onSubmit={onSubmit}>
        {children}
    </form>
  )
}

export default Form