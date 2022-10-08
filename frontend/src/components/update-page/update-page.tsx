import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCharacterByIdQuery } from '../../store/query';
import { Form } from '../common/form/form';
 
const UpdatePage: FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCharacterByIdQuery({ id: id as string });

  if (isLoading) return null;
  
  return (
    <main>
      <Form isCreatePage={false} data={data}/>
    </main>
  );
}
 
export { UpdatePage };