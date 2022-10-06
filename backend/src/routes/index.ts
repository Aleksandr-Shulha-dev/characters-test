import { Router } from "express";
import { API } from '../common/enums';
import {
  createNewCharacter,
  getCharacterList,
  getCharacterById,
  deleteCharacter,
  updateCharacter,
} from "../controllers";

const marvelСharacters = Router();

marvelСharacters.get(`${API.GETBYID}/:id`, getCharacterById);

marvelСharacters.get(`${API.GETLIST}`, getCharacterList);

marvelСharacters.post(`${API.CREATE}`, createNewCharacter);

marvelСharacters.patch(`${API.UPDATE}/:id`, updateCharacter);

marvelСharacters.delete(`${API.DELETE}/:id`, deleteCharacter);



export { marvelСharacters };