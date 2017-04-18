# techStack-project-REACT-REDUX

The project aim is to learn the basics of React with Redux and get the familarity of using store

#### WHAT DOES TECH STACK DO ?

![alt text](https://github.com/tanu2626/techStack-project-REACT-REDUX/blob/master/images/Screenshot%202017-04-03%2020.57.58.png)

#### STORE

1. create STORE

    STORE is an object that holds the app state and reducers

2 For store, we need a reducer

    const reducer = ( ) => [ ];
    const store = Redux.createStore(reducer);

    store.getState( );

    application state will be [ ]

    — Reducer produced states

3. CREATE AN ACTION
    —define a type property that should always be string
    — which string we want to split by passing a payload property

4. Update reducer
5. call store.dispatch(action);
6. run store.getState( );

— Created Reducer
— Created store and pass that one reducer
— Made an action - tell reducer how to update states
—  Sent the action to all the reducers
       - store.dispatch(action);


##### Install dependencies

npm install - - save redux react - redux

Open Atom
- delete index files to do things from scratch
— make a new folder called src

#### WHAT IS REACT-REDUX
react-redux is a library is for communication n between react and redux

#### REDUCERS

we will make 2 separate reducers
 - library reducer - responsible for producing list of libraries to show to the user
    Array of objects, each object represents a distinct library to show to the user

- selection reducer - just keep track of the currently expanded libraries to show to the user


    "id": 0,                          — key
     "title": "Webpack”,     — value
 
 #### BOILERPLATE FOR CLASS BASED COMPONENT

import React, { Component } from 'react';

class LibraryList extends Component {
  render() {
    return;
  }
}

export default LibrayList;


#### WHAT IS CONNECT

CONNECT IS A HELPER THAT WILL CONNECT THE COMPONENT TO THE REDUX STORE

## EXPLANATION ( a good breather )

— wHEN APP BOOTS UP,
— redux creates a new store with LibraryReducer
— the instance the store is created, it runs libraryReducer one time so we get ta piece of state called
    libraries which is an array containing list of objects
— The reducer itself when it runs it returns a array of objects and each object sends one library that we eventually want to
    show up on the screen
    
 ### ACTION STEPS:
 
1.Make an action create folder under actions folder
2. Under it  , make index, js
3. put this content

            //space to create action creater

            // it is an action creater
            
      export const selectLibrary = (libraryId) => {
        return {
          // object with the type property
          type: 'select_library'
          payload: libraryId
        };
      };


4. now in the listItem, import actions like this
            
           import * as actions from '../actions’;
 
 it will give access to all the actions

5. import connect
            import { connect } from 'react-redux’;
        
            change this export line like this:
            
             export default connect()(ListItem);
            export default connect(null, actions)(ListItem);

