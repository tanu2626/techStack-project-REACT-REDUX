//space to create action creater

// it is an action creater
export const selectLibrary = (libraryId) => {
  return {
    // object with the type property
    type: 'select_library',
    payload: libraryId
  };
};
