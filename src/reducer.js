const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Date.now(),
          text: "",
          completed: false
        }
      ];
    case "update":
      return state.map(item => {
        if (item.id === action.payload.id) {
          console.log({ ...item, ...action.payload });
          return { ...item, ...action.payload };
        }
        return item;
      });
    default:
      return state;
  }
}

export { initialState };
export default reducer;
