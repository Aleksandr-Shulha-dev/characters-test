import { Router } from "express";
import path from 'path';
import multer from "multer";
import { API } from '../common/enums';
import {
  createNewCharacter,
  getCharacterList,
  getCharacterById,
  deleteCharacter,
  updateCharacter,
  getImage,
} from "../controllers";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'src/images')
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage });

const marvelСharacters = Router();

marvelСharacters.get(`${API.GETBYID}/:id`, getCharacterById);

marvelСharacters.get(`${API.GETLIST}`, getCharacterList);

marvelСharacters.post(`${API.CREATE}`, createNewCharacter);

marvelСharacters.patch(`${API.UPDATE}/:id`, updateCharacter);

marvelСharacters.delete(`${API.DELETE}/:id`, deleteCharacter);

marvelСharacters.get(`${API.IMAGES}/:name`, getImage);


export { marvelСharacters };