enum API {
  BASE = 'http://localhost:3001/api/v1',
  GETBYID = '/get',
  GETLIST = '/get-list',
  CREATE = '/create',
  UPDATE = '/update',
  DELETE = '/delete',
}

enum AppRoute {
  BASE = '/',
  CHARACTER = '/character',
  EDIT_CHARACTER = '/edit',
  OTHER = '*',
}

export { API, AppRoute };