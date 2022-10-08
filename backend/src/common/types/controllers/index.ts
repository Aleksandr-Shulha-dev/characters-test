import { Request } from 'express';
import { Query } from 'express-serve-static-core';

interface TypedRequestBody<T> extends Request {
  body: T;
};

interface TypedRequestQuery<T extends Query> extends Request {
  query: T;
};

interface CommonCharacterDataRequest {
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: string;
  catch_phrase: string;
}


export type {
  TypedRequestBody,
  TypedRequestQuery,
  CommonCharacterDataRequest,
}