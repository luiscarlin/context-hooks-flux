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

const remove = id => ({
  type: actionTypes.REMOVE,
  payload: { id }
});

export default { add, updateText, toggle, remove };
