const base = process.env.REACT_APP_CHACKRA_API;

export const URLs = {
  user: {
    login: `${base}/user/login`
  }
}

export const METHODS = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
}