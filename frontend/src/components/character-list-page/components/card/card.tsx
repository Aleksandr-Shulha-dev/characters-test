import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../../common/enums';
import trash from '../../../../assets/images/trash.svg';
import edit from '../../../../assets/images/edit.svg';
import './styles.scss';
import { useDeleteCharacterMutation } from '../../../../store/query';

interface CardProps {
  data: {
    id: string;
    nickname: string;
    images: string[];
  }
}
 
const Card: FC<CardProps> = ({ data }) => {
  const navigate = useNavigate();
  const [deleteCharacter] = useDeleteCharacterMutation()

  const handleClick = (event: React.SyntheticEvent<HTMLDivElement>) => {
    event.stopPropagation();
    navigate(`${AppRoute.CHARACTER}/${data.id}`)
  }

  const handleEditClick = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.stopPropagation();
    navigate(`${AppRoute.EDIT_CHARACTER}/${data.id}`)
  }

  const handleDeleteClick = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.stopPropagation();
    deleteCharacter({ id: data.id });
  }

  return (
    <div className="card" onClick={handleClick}>
      <img className="card__img" src={data.images[0]} alt="hero" />
      <span className="card__tools flex-row-middle">
        <img onClick={handleDeleteClick} src={trash} alt="trash" className="icon" />
        <img onClick={handleEditClick} src={edit} alt="edit" className="icon" />
      </span>
      <p className="card__title">{data.nickname}</p>
    </div>
  );
}
 
export { Card };