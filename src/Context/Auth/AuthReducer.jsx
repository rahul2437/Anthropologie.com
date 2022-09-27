export const initState = {
  email: "",
  password: "",
};

export const loginReducer = (state, action) => {
  return {
    ...state,
    [action.input]: action.value,
  };
};
