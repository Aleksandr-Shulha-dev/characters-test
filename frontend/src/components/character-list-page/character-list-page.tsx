import { FC, useState, useMemo, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useGetCharacterListQuery } from '../../store/query';
import { Grid } from './components/grid/grid';
import { CommonCharacterData } from '../../../../shared/common/types';
import { CharacterId } from '../../common/types';
import './styles.scss';
import { calcNumberOfPaginationList } from '../../helper';
import { AppRoute } from '../../common/enums';
 
const CharacterList: FC = () => {
  const { id } = useParams<CharacterId>();
  const [ pagination, setPagination ] = useState({ skip: '0', take: '5' })
  const { data, isLoading } = useGetCharacterListQuery(pagination);

  useEffect(() => {
    const triger = Number(id);
    if (triger === 1) {
      setPagination({ skip: '0', take: '5' });
    }
    if (triger > 1) {
      setPagination(({ skip, take }) => ({
        skip: String(+take*triger - 5),
        take,
      }))
    }
  }, [id])

  const paginationListQuantity = useMemo(() => {
    return calcNumberOfPaginationList(data?.count)
  }, [data?.count]);

  if(isLoading) return null;

  return (
    <main className="character-list flex-column-middle">
      <Grid data={data?.list as CommonCharacterData[]}/>
      <ul className="pagination">
        {[...Array(paginationListQuantity)].map((_, index) => (
          <li key={index} className="pagination__item">
            <NavLink
              to={`${AppRoute.BASE}${index + 1}`}
              className={({ isActive }) =>
                isActive ? 'active-page' : undefined
              }
            >{index + 1}</NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
}
 
export { CharacterList };