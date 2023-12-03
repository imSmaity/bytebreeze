import { CSSProperties, ReactNode } from 'react'

const btnStyle = {
  padding: '12px',
  width: '85px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#0696FF',
  color: '#ffffff',
  fontSize: '15px',
}

interface IButtonProps {
  children: ReactNode
  handleClick: () => void
  style?: CSSProperties
}

/**
 * Button component for user interactions.
 * @param {Object} props - Component props.
 * @param {ReactNode} props.children - The content of the button.
 * @param {() => void} props.handleClick - Function to handle button click.
 * @param {CSSProperties} props.style - Custom style for the button.
 */
const Button = ({ children, handleClick, style }: IButtonProps) => {
  return (
    <button style={{ ...btnStyle, ...style }} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button
