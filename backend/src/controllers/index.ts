import { Request, Response, NextFunction } from 'express';
import { db } from '../database';
import { v4 as uuidv4 } from 'uuid';
import httpStatus from 'http-status-codes';
import {
  CreateNewCharacterBody,
  CommonCharacterData,
  PaginationOptions,
  GetCharacterListResponse,
  updateCharacterBody,
} from '../../../shared/common/types';
import { TypedRequestBody, TypedRequestQuery } from '../common/types';

const createNewCharacter = (
  req: TypedRequestBody<CreateNewCharacterBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = uuidv4();
    const character = { id, ...req.body };
    db.get('characters').push(character).write();
    res.sendStatus(httpStatus.CREATED);
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
    const list = db.get('characters').slice(start, end).value();
    const count = db.get('characters').size().value();
    res.sendStatus(httpStatus.OK).json({ list, count });
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
    const result = db.get('characters').find({ id }).value();
    res.sendStatus(httpStatus.OK).json(result);
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
    db.get('characters').remove({ id });
    res.sendStatus(httpStatus.OK);
  } catch(error) {
    next(error);
  }
};

const updateCharacter = (
  req: TypedRequestBody<updateCharacterBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const body = req.body;
    db.get('characters').find({ id }).assign(body).write();
    res.sendStatus(httpStatus.OK);
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
}
