import actionTypes from "./actionTypes";

const add = () => ({ type: actionTypes.ADD });

const updateText = (id, text) => ({
  type: actionTypes.UPDATE,
  payload: { id, text }
});

export default { add, updateText };
