import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

//create a reducer called Libraries
// reducer is a function that returns some kind of array
//reducers always returns an array

// here is a empty array
// combineReducers - responsible for making multiple reducers

export default combineReducers({
  // libraries: () => []
  // coming from LibraryReducer.js
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});


// console.log(store.getState());
// { libraries: [ { id: 1, title: 'Webpack', description: '...'}]}
