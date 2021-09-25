export const setData = (action) => {
  return {
    type: "SET_DATA",
    payload: action,
  };
};
export const getData = (action) => {
  return {
    type: "GET_DATA",
    payload: action,
  };
};
export const filter = (action) => {
  return {
    type: "FILTER",
    payload: action,
  };
};
export const sortItems = (action) => {
  return {
    type: "SORT",
    payload: action,
  };
};
export const sortPosition = (action) => {
  return {
    type: "SORT_POSITION",
    payload: action,
  };
};
export const changeStatus = (action) => {
  return {
    type: "CHANGE_STATUS",
    payload: action,
  };
};
export const currentUser = (action) => {
  return {
    type: "CURRENT_USER",
    payload: action,
  };
};
export const filterByState = (action) => {
  return {
    type: "FILTER_BY_STATE",
    payload: action,
  };
};
export const getStates = (action) => {
  return {
    type: "GET_STATES",
    payload: action,
  };
};
