import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../common/enums';
import { CharacterPage } from '../character-page/character-page';
import { CharacterList } from '../character-list-page/character-list-page'; 
import { CreatePage } from '../create-page/create-page';
import { UpdatePage } from '../update-page/update-page';
import { Header } from '../header/header';
import './styles.scss';
 
const App: FC = () => {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path={AppRoute.BASE} element={<Navigate to={`${AppRoute.BASE}1`}/>}/>
        <Route path={`${AppRoute.BASE}/:id`} element={<CharacterList />}/>
        <Route path={`${AppRoute.CHARACTER}/:id`} element={<CharacterPage />}/>
        <Route path={`${AppRoute.EDIT_CHARACTER}/:id`} element={<UpdatePage />}/>
        <Route path={`${AppRoute.CREATE_CHARACTER}`} element={<CreatePage />}/>
        <Route path={AppRoute.OTHER} element={<Navigate to={`${AppRoute.BASE}1`}/>}/>
      </Routes>
    </div>
  );
};
 
export { App };
