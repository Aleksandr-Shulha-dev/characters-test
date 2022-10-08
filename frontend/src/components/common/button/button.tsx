import { FC } from 'react';
import './styles.scss';

interface ButtonProps {
  text: string;
  clazz: string;
  onClick: () => void
}
 
const Button: FC<ButtonProps> = ({ text, clazz, onClick }) => {
  return (
    <button onClick={onClick} className={`btn ${clazz}`}>{text}</button>
  );
}
 
export { Button };