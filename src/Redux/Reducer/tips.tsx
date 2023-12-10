const initTips = {
  tips: [],
};

export const tipsReducer = (state = initTips, action: any) => {
  if (action.type === 'SET_ALL_TIPS') {
    return {
      ...state,
      tips: action.value.tips,
    };
  }

  return state;
};
