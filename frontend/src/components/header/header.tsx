import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../common/enums';
import './styles.scss';
 
const Header: FC = () => {
  return (
    <header className='header flex-row-middle'>
      <nav className='navigation'>
        <NavLink to={AppRoute.BASE}>
          list
        </NavLink>
        <span>/</span>
        <NavLink to={AppRoute.CREATE_CHARACTER}>
          create
        </NavLink>
      </nav>
    </header>
  );
}
 
export { Header };