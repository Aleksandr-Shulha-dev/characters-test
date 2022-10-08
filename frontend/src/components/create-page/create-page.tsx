import { FC } from 'react';
import { Form } from '../common/form/form';
 
const CreatePage: FC = () => {
  return (
    <main>
      <Form isCreatePage={true}/>
    </main>
  );
}
 
export { CreatePage };