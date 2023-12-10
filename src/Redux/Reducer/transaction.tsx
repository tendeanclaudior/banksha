const initTransaction = {
  data: [],
};

export const transactionReducer = (state = initTransaction, action) => {
  if (action.type === 'SET_ALL_TRANSACTION') {
    return {
      ...state,
      data: action.value.data,
    };
  }

  return state;
};
