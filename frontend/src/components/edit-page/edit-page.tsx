import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterId } from '../../common/types';
import './styles.scss';
 
const EditPage: FC = () => {
  const { id } = useParams<CharacterId>();
  return (
    <main className="edit">edit {id}</main>
  );
}
 
export { EditPage };