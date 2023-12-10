export const setLoading = value => {
  return {type: 'SET_LOADING', value: value};
};

export const isConnectedService = value => {
  return {type: 'SET_IS_CONNECTED', value: value};
};

export const isRefreshingService = value => {
  return {type: 'SET_IS_REFRESHING', value: value};
};
