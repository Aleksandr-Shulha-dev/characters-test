import { FC } from 'react';
import { CommonCharacterData } from '../../../../../../shared/common/types';
import { Card } from '../card/card';
import './styles.scss';

interface GridProps {
  data: CommonCharacterData[];
}
 
const Grid: FC<GridProps> = ({ data }) => {
  return (
    <ul className="grid">
      {data.map(({id, nickname, images}) => (
        <li key={id}>
          <Card data={{ id, nickname, images }} />
        </li>
      ))}
    </ul>
  );
}
 
export { Grid };