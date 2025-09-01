export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error
});

export const logout = () => ({
  type: LOGOUT
});

export const login = (credentials) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      if (credentials.username === 'admin' && credentials.password === 'password') {
        const user = { id: 1, username: 'admin', name: 'Administrator' };
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(loginSuccess(user));
      } else {
        dispatch(loginFailure('Invalid credentials'));
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem('user');
    dispatch(logout());
  };
};

export const checkAuth = () => {
  return (dispatch) => {
    const user = localStorage.getItem('user');
    if (user) {
      dispatch(loginSuccess(JSON.parse(user)));
    }
  };
};
