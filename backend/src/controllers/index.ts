import { Request, Response, NextFunction } from 'express';
import { db } from '../database';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { createImgUrl } from '../helper/helper';
import httpStatus from 'http-status-codes';
import {
  CommonCharacterData,
  PaginationOptions,
  GetCharacterListResponse,
  UpdateCharacterBody,
} from '../../../shared/common/types';
import {
  TypedRequestBody,
  TypedRequestQuery,
} from '../common/types';

const createNewCharacter = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = uuidv4();
    const images = req.file?.filename ? [req.file?.filename]: [];
    const character = { id, ...req.body, images };
    db.get('characters').push(character).write();
    res.status(httpStatus.CREATED).json({ id });
  } catch(error) {
    next(error);
  }
};

const getCharacterList = (
  req: TypedRequestQuery<PaginationOptions>,
  res: Response<GetCharacterListResponse>,
  next: NextFunction,
) => {
  try {
    const { skip, take } = req.query;
    const start = Number(skip);
    const end = start + +take;
    let list = db.get('characters').slice(start, end).value();
    list = createImgUrl(list);
    const count = db.get('characters').size().value();
    res.status(httpStatus.OK).json({ list, count });
  } catch(error) {
    next(error);
  }
};

const getCharacterById = (
  req: Request,
  res: Response<CommonCharacterData>,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const character = db.get('characters').find({ id }).value();
    const [ result ] = createImgUrl([ character ]);
    res.status(httpStatus.OK).json(result);
  } catch(error) {
    next(error);
  }
};

const deleteCharacter = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    db.get('characters').remove({ id }).write();
    res.sendStatus(httpStatus.OK);
  } catch(error) {
    next(error);
  }
};

const updateCharacter = (
  req: TypedRequestBody<UpdateCharacterBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    // if(req.file) {
    //   const images = [req.file.filename];
    //   db.get('characters').find({ id }).assign({ images, ...body}).write();
    // } else {
    //   db.get('characters').find({ id }).assign(body).write();
    // }
    res.sendStatus(httpStatus.OK);
  } catch(error) {
    next(error);
  }
}

const getImage = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name } = req.params;
    res.sendFile(`${path.join(__dirname, '../images', `${name}`)}`);
  } catch(error) {
    next(error);
  }
}

export {
  createNewCharacter,
  getCharacterList,
  getCharacterById,
  deleteCharacter,
  updateCharacter,
  getImage,
}
