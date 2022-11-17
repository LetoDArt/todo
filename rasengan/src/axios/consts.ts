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
    changeStatus: `${base}/deal/changeStatus`,
    delete: `${base}/deal/delete`,
    create: `${base}/deal/create`,
    update: `${base}/deal/change`,
  }
}

export const METHODS = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
}
