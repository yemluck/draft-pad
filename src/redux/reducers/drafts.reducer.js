const draftsReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_DRAFTS':
      return action.payload;
    default:
      return state
  }
}

export default draftsReducer