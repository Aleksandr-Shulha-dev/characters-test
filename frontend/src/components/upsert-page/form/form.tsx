import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AppRoute } from '../../../common/enums';
import { FormState, PreviewState, UpsertPageProps } from '../../../common/types';
import { fillFormData } from '../../../helper';
import { useCreateCharacterMutation } from '../../../store/query';
import './styles.scss';
 
const Form: FC<UpsertPageProps> = ({ isCreatePage }) => {
  const navigate = useNavigate();
  const [ formState, setFormState ] = useState<FormState>({
    nickname: '',
    real_name: '',
    origin_description: '',
    superpowers: '',
    catch_phrase: '',
    file: null
  });
  const [ imgPreview, setImgPreview ] = useState<string>('');

  const [ createCharacter ] = useCreateCharacterMutation();

  useEffect(() => {
    if (formState.file) {
      const objectUrl = URL.createObjectURL(formState.file);
      setImgPreview(objectUrl);
      console.log(formState.file);
    }
  }, [formState.file]);

  const handleImageClick = (event: React.SyntheticEvent<HTMLDivElement>) => {
    setImgPreview('');
    setFormState(state => ({ ...state, file: null }));
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    if (target.files) {
      const file = target.files[0];
      setFormState(state => ({ ...state, file }));
    } else {
      setFormState(state => ({ ...state, [target.name]: target.value }));
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let data = new FormData();
    if (formState.file) {
      data = fillFormData(formState, data);
      createCharacter(data)
        .unwrap()
        .then(({ id }) => navigate(`${AppRoute.CHARACTER}/${id}`));
    }
  }

  return (
    <form 
      className="form flex-column-middle"
      encType='multipart/form-data'
      onSubmit={handleSubmit}
    >
      <figure className="gallery flex-row-middle">
        { imgPreview ? 
          (
            <div 
              className="gallery__img-wrapper"
              onClick={handleImageClick}
            >
              <img
                className="gallery__img"
                src={imgPreview}
                alt="preview"
              />
            </div>
          ) :
          null
        }
      </figure>
      <label className="file-input input-btn" htmlFor="file">choose file</label>
      <input 
        name="file"
        type="file"
        onChange={handleInputChange}
        id="file"
      />
      <label className="lable">nikcname</label>
      <input
        className="text-input"
        type="text"
        name="nickname"
        onChange={handleInputChange}
        min="2"
        value={formState.nickname}
      />
      <label className="lable">real name</label>
      <input
        className="text-input"
        type="text"
        name="real_name"
        onChange={handleInputChange}
        min="2"
        value={formState.real_name}
      />
      <label className="lable">description</label>
      <input
        className="text-input"
        type="text"
        name="origin_description"
        onChange={handleInputChange}
        min="2"
        value={formState.origin_description}
      />
      <label className="lable">superpowers</label>
      <input
        className="text-input"
        type="text"
        name="superpowers"
        onChange={handleInputChange}
        min="2"
        value={formState.superpowers}
      />
      <label className="lable">catch phrase</label>
      <input
        className="text-input"
        type="text"
        name="catch_phrase"
        onChange={handleInputChange}
        min="2"
        value={formState.catch_phrase}
      />
      <input type="submit" value="save" className="submit-input input-btn" />
    </form>
  );
}
 
export { Form };