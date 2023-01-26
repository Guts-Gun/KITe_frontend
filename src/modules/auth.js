import { createAction, handleActions } from 'redux-actions';


const INITIALIZE_FORM = 'auth/initialize_form';                     // 초기화
const LOGIN = 'auth/login';                                         // 로그인
const REFRESH_TOKEN = 'auth/refresh_token';                         // 토큰 재발급

export const initializeForm = createAction(INITIALIZE_FORM);
export const login = createAction(LOGIN,({email, username, accesstoken, refreshtoken}) => ({
    email, username, accesstoken, refreshtoken
}));
export const refresh_token = createAction(REFRESH_TOKEN,({accesstoken, refreshtoken}) => ({
    accesstoken, refreshtoken
}));


const initialState = {
    accesstoken : "",
    refreshtoken : "",
    email : "",
    username : "",
};


const auth = handleActions({
    [INITIALIZE_FORM]: (state) => {
        return initialState;
      },
    [LOGIN] : (state, {payload: auth }) => { 
        state.email=auth.email;
        state.username=auth.username;
        state.accesstoken=auth.accesstoken;
        state.refreshtoken=auth.refreshtoken;
        return {
            ...state,
        };
    },
    [REFRESH_TOKEN] : (state, {payload: auth }) => { 
        state.accesstoken=auth.accesstoken;
        state.refreshtoken=auth.refreshtoken;
        return {
            ...state,
        };
    },
  },
  initialState
);

export default auth;