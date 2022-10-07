import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../../common/enums';
import trash from '../../../../assets/images/trash.svg';
import edit from '../../../../assets/images/edit.svg';
import './styles.scss';

interface CardProps {
  data: {
    id: string;
    nickname: string;
    images: string[];
  }
}
 
const Card: FC<CardProps> = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${AppRoute.CHARACTER}/${data.id}`)
  }

  return (
    <div className="card" onClick={handleClick}>
      <img className="card__img" src={data.images[0]} alt="hero" />
      <span className="card__tools flex-row-middle">
        <img src={trash} alt="trash" className="icon" />
        <img src={edit} alt="edit" className="icon" />
      </span>
      <p className="card__title">{data.nickname}</p>
    </div>
  );
}
 
export { Card };