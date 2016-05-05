// written and Example Reducer which does nothing
const LoginStatusReducer = (state="", action) => {
  console.group('reducers : LoginStatusReducer : UIStateReducer');
  console.log('LoginStatusReducer : action',action);
  console.log('LoginStatusReducer : state',state);
  var newState = (action.type==="SUCCESS_LOGIN") ? "LoginSuccess" : state;
  console.log('LoginStatusReducer : newState',newState);
  console.groupEnd();
  return newState;
}

export default LoginStatusReducer
