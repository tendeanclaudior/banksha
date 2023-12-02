const initBank = {
  data: [],
};

export const bankReducer = (state = initBank, action) => {
  if (action.type === 'SET_ALL_BANK') {
    return {
      ...state,
      data: action.value.data,
    };
  }

  return state;
};
