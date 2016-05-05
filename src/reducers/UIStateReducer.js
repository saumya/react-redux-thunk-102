// written and Example Reducer which does nothing
const UIStateReducer = (state="", action) => {
  console.group('reducers : UIStateReducer : UIStateReducer');
  console.log('UIStateReducer : action',action);
  console.log('UIStateReducer : state',state);
  var newState;
  switch (action.type) {
    case "SUCCESS_LOGIN":
      newState = "login success";
      break;
    default:
      newState = state;
  }
  console.log('UIStateReducer : newState',newState);
  console.groupEnd();
  return newState;
}

export default UIStateReducer
