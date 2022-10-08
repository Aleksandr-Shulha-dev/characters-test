import { FC } from 'react';
import { Form } from './form/form';
import { UpsertPageProps } from '../../common/types'
import './styles.scss';
 
const UpsertPage: FC<UpsertPageProps> = ({ isCreatePage }) => {
  return (
    <main className="upsert">
      <Form isCreatePage={isCreatePage}/>
    </main>
  );
}
 
export { UpsertPage };