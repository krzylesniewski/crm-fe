import { UserEntity, UserRole } from '../types/user';

enum ActionTypes {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  FETCH_USER_DETAILS_SUCCESS = 'FETCH_USER_DETAILS_SUCCESS',
}

interface LoginSuccess {
  type: ActionTypes.LOGIN_SUCCESS;
  payload: UserEntity;
}

interface FetchUserDetailsSuccess {
  type: ActionTypes.FETCH_USER_DETAILS_SUCCESS;
  payload: UserEntity;
}

type Action = LoginSuccess | FetchUserDetailsSuccess;

interface UserState {
  details: UserEntity;
}

const initialState: UserState = {
  details: {
    id: '',
    role: UserRole.Admin,
    name: '',
    surname: '',
  },
};

export default (state: UserState = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return state;
    case ActionTypes.FETCH_USER_DETAILS_SUCCESS:
      return state;
    default:
      return state;
  }
};
