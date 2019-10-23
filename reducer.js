// Imports

// Actions

const LOGIN = "LOGIN";

// Action Creators

function LoginBtn() {
  return {
    type: LOGIN
  };
}


// Reducer


const initialState = {
  isLogin: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return applyLoginBtn(state, action);
    
    default:
      return state;
  }
}

// Reducer Functions

function applyLoginBtn(state, action) {
  
  return {
    ...state,
    isLogin: true,
  };
}


// Exports

const actionCreators = {
  LoginBtn,
};
export { actionCreators };

// Default

export default reducer;