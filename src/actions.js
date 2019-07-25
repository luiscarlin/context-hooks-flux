import actionTypes from "./actionTypes";

const add = () => ({ type: actionTypes.ADD });

const updateText = (id, text) => ({
  type: actionTypes.UPDATE,
  payload: { id, text }
});

const toggle = (id, completed) => ({
  type: actionTypes.TOGGLE,
  payload: { id, completed }
});

export default { add, updateText, toggle };
