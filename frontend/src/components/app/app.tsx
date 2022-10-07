import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../common/enums';
import { CharacterPage } from '../character-page/character-page';
import { EditPage } from '../edit-page/edit-page';
import { CharacterList } from '../character-list-page/character-list-page'; 
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
        <Route path={`${AppRoute.EDIT_CHARACTER}/:id`} element={<EditPage />}/>
        <Route path={AppRoute.OTHER} element={<Navigate to={`${AppRoute.BASE}1`}/>}/>
      </Routes>
    </div>
  );
};
 
export { App };
