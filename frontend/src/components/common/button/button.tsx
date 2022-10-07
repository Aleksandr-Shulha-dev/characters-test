import { FC } from 'react';
import './styles.scss';

interface ButtonProps {
  text: string;
  clazz: string;
}
 
const Button: FC<ButtonProps> = ({ text, clazz }) => {
  return (
    <button className={`btn ${clazz}`}>{text}</button>
  );
}
 
export { Button };