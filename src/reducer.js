import actionTypes from "./actionTypes";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD:
      return [
        ...state,
        {
          id: Date.now(),
          text: "",
          completed: false
        }
      ];
    case actionTypes.UPDATE:
      return state.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });
    case actionTypes.TOGGLE:
      return state.map(item => {
        if (item.id === action.payload.id) {
          console.log(action.payload);
          return { ...item, ...action.payload };
        }
        return item;
      });
    case actionTypes.REMOVE:
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
}

export { initialState };
export default reducer;
