const initStateRegister = {
  name: '',
  email: '',
  password: '',
  profile_picture: '',
};

export const registerReducer = (state = initStateRegister, action) => {
  if (action.type === 'SET_REGISTER') {
    return {
      ...state,
      name: action.value.name,
      email: action.value.email,
      password: action.value.password,
    };
  }

  if (action.type === 'SET_REGISTER_PICTURE') {
    return {
      ...state,
      profile_picture: action.value.profile_picture,
    };
  }

  if (action.type === 'SET_CLEAR_REGISTER') {
    return {
      initStateRegister,
    };
  }

  return state;
};
