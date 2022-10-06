import { FC } from 'react';
import { Header } from '../header/header';
import './styles.scss';
 
const App: FC = () => {
  return (
    <div className='app'>
      <Header />
    </div>
  );
};
 
export { App };
