const initGlobalState = {
  isError: false,
  message: 'Error',
  isLoading: false,
  isConnected: true,
  isRefreshing: false,
};

export const globalReducer = (state = initGlobalState, action) => {
  if (action.type === 'SET_ERROR') {
    return {
      ...state,
      isError: action.value.isError,
      message: action.value.message,
    };
  }

  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      isLoading: action.value,
    };
  }

  if (action.type === 'SET_IS_CONNECTED') {
    return {
      ...state,
      isConnected: action.value,
    };
  }

  if (action.type === 'SET_IS_REFRESHING') {
    return {
      ...state,
      isRefreshing: action.value,
    };
  }

  return state;
};
