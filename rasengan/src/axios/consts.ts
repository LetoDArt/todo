const base = process.env.REACT_APP_CHACKRA_API;

export const URLs = {
  user: {
    login: `${base}/user/login`,
    profile: `${base}/user/profile`,
    register: `${base}/user/create`,
    change: `${base}/user/change`,
  },
  matter: {
    all: `${base}/deal/list`,
  }
}

export const METHODS = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
}
