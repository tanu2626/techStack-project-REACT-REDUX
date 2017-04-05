export default (state = null, action) => {
  //MUST have a switch
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
