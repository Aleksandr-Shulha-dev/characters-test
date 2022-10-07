enum API {
  BASE = 'http://localhost:3001/api/v1',
  GETBYID = '/get',
  GETLIST = '/get-list',
  CREATE = '/create',
  UPDATE = '/update',
  DELETE = '/delete',
}

enum AppRoute {
  LiST = '/',
  CHARACTER = '/character/:id',
  EDIT_CHARACTER = '/edit/:id',
  OTHER = '*',
}

export { API, AppRoute };