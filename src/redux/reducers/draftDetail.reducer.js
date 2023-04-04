const draftDetailReducer = (state={}, action) => {
  switch(action.type) {
    case 'SET_DRAFT_DETAIL':
      return action.payload;
    case 'UPDATE_ACTIVE_DETAIL':
      return {...state, ...action.payload};
    default:
      return state
  }
}

export default draftDetailReducer