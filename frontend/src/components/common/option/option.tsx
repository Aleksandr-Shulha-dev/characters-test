import { FC } from 'react';
import './styles.scss';

interface OptionProps {
  data: string;
  label: string;
}
 
const Option: FC<OptionProps> = ({ data, label }) => {
  return (
    <p className="option">
      <span className="label">{label}: </span>
      <span className="text">{data}</span>
    </p>
  );
}
 
export { Option };