import { Router } from "express";
import { uploadMiddleware } from '../middlewares/middlewares';
import { API } from '../common/enums';
import {
  createNewCharacter,
  getCharacterList,
  getCharacterById,
  deleteCharacter,
  updateCharacter,
  getImage,
} from "../controllers";

const marvelСharacters = Router();

marvelСharacters.get(`${API.GETBYID}/:id`, getCharacterById);

marvelСharacters.get(`${API.GETLIST}`, getCharacterList);

marvelСharacters.post(`${API.CREATE}`, uploadMiddleware, createNewCharacter);

marvelСharacters.patch(`${API.UPDATE}/:id`, uploadMiddleware, updateCharacter);

marvelСharacters.delete(`${API.DELETE}/:id`, deleteCharacter);

marvelСharacters.get(`${API.IMAGES}/:name`, getImage);


export { marvelСharacters };