import React, { FC, useEffect, useState, useMemo } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { CommonCharacterData } from '../../../../../shared/common/types';
import { AppRoute } from '../../../common/enums';
import { FormState, UpsertPageProps } from '../../../common/types';
import { fillFormData, getInitialState } from '../../../helper';
import { useCreateCharacterMutation, useUpdateCharacterMutation } from '../../../store/query';
import { createInitialFormState } from './common/variables';
import './styles.scss';
 
const Form: FC<UpsertPageProps> = ({ isCreatePage, data }) => {
  const initialFormState = useMemo(() => {
    return getInitialState(
      isCreatePage,
      data as CommonCharacterData,
      createInitialFormState
    );
  }, [isCreatePage, data]);
  const initialPrevie = isCreatePage ? '' : data?.images[0] || '';
  const navigate = useNavigate();
  const [ formState, setFormState ] = useState<FormState>(initialFormState);
  const [ imgPreview, setImgPreview ] = useState<string>(initialPrevie);
  const { id } = useParams();
  const [ createCharacter ] = useCreateCharacterMutation();
  const [ updateCharacter ] = useUpdateCharacterMutation();

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
      if(imgPreview) return
      const file = target.files[0];
      setFormState(state => ({ ...state, file }));
    } else {
      setFormState(state => ({ ...state, [target.name]: target.value }));
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let data = new FormData();
    if (formState.file || imgPreview) {
      data = fillFormData(formState, data);
      if(isCreatePage) {
        createCharacter(data)
          .unwrap()
          .then(({ id }) => navigate(`${AppRoute.CHARACTER}/${id}`));
      } else {
        data.append('id', id as string);
        updateCharacter(data)
          .unwrap()
          .then(() => navigate(`${AppRoute.CHARACTER}/${id}`));
      }
    }
  }

  // const handleUpdateSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   let data = new FormData();
  //   if (formState.file) {
  //     data = fillFormData(formState, data);
  //     updateCharacter({ id: id as string, ...data})
  //       .unwrap()
  //       .then(() => navigate(`${AppRoute.CHARACTER}/${id}`));
  //   }
  // }

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