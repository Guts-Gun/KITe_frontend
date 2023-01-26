import { createAction, handleActions } from 'redux-actions';


const INITIALIZE_FORM = 'modal/initialize_form';                     // 초기화
const LOGIN_MODAL = 'modal/login_modal'                              // 로그인 모달
const REGISTER_MODAL = 'modal/register_modal'                        // 회원가입 모달

export const initializeForm = createAction(INITIALIZE_FORM);
export const login_modal = createAction(LOGIN_MODAL,({login_modal}) => ({
    login_modal
}));
export const register_modal = createAction(REGISTER_MODAL,({register_modal}) => ({
    register_modal
}));


const initialState = {
    login_modal : false,
    register_modal : false
};


const modal = handleActions({
    [INITIALIZE_FORM]: (state) => {
        return initialState;
      },
    [LOGIN_MODAL] : (state) => { 
        state.login_modal=!state.login_modal

        return {
            ...state,
        };
    },
    [REGISTER_MODAL] : (state) => { 
        state.register_modal=!state.register_modal

        return {
            ...state,
        };
    },
  },
  initialState
);

export default modal;