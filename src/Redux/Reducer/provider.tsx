const initProvider = {
  providers: [],
};

export const providerReducer = (state = initProvider, action) => {
  if (action.type === 'SET_ALL_PROVIDER') {
    return {
      ...state,
      providers: action.value.providers,
    };
  }

  return state;
};
