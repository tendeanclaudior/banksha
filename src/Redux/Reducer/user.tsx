const initUser = {
  user: {},
};

export const userReducer = (state = initUser, action) => {
  if (action.type === 'SET_USER') {
    return {
      ...state,
      user: action.value.user,
    };
  }

  if (action.type === 'SET_RESET_USER') {
    return {
      initUser,
    };
  }

  return state;
};
