import { FC } from 'react';
import { CharacterPage } from '../character-page/character-page';
import { Header } from '../header/header';
import './styles.scss';
 
const App: FC = () => {
  return (
    <div className='app'>
      <Header />
      <CharacterPage />
    </div>
  );
};
 
export { App };
