import { FC } from 'react';
import { Option } from '../common/option/option';
import { useGetCharacterByIdQuery } from '../../store/query';
import './styles.scss';
import { Button } from '../common/button/button';
 
const CharacterPage: FC = () => {
  const id = {
    id: "0bb7f325-dee6-4c34-919b-d3ac5c87afc2",
  };
  const { data } = useGetCharacterByIdQuery(id);

  return (
    <main className="character flex-row-middle">
      <div className="img-wrapper">
        <img className="img" src={data?.images[0]} alt="" />
        <p className="title">
          <span className="nickname">{data?.nickname}</span>
          <span className="catch-phrase">{`"${data?.catch_phrase}"`}</span>
        </p>
      </div>
      <div className="options-wrapper">
        <Option data={data?.real_name || ''} label="Real name"/>
        <Option data={data?.superpowers || ''} label="Superpowers"/>
        <Option data={data?.origin_description || ''} label="Description"/>
        <div className='btn-group flex-row-middle'>
          <Button text="edit" clazz='edit-btn'/>
          <Button text="delete" clazz='delete-btn'/>
        </div>
      </div>
    </main>
  );
}
 
export { CharacterPage };