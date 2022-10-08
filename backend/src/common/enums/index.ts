import * as dotenv from 'dotenv';

dotenv.config();

const ENV = {
  PORT: process.env.PORT,
  URL: process.env.DEV_URL,
}

enum API {
  BASE = '/api/v1',
  GETBYID = '/get',
  GETLIST = '/get-list',
  CREATE = '/create',
  UPDATE = '/update',
  DELETE = '/delete',
  IMAGES = '/images'
}



export { API, ENV };
