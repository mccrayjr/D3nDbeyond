import React from 'react';
import cloneDeep from 'lodash/cloneDeep'


//Our initial state creates an array that will hold all of our "character" objects
const initialState = [];

//create context allows us to use the Provider component to wrap around our children components and pass data on line 30
const charContext = React.createContext(initialState);
const { Provider } = charContext;

//Action Types allows us to pass an object that carries an action type and a data that we need to use to modify the state or initial state ex {action: 'ADD_CHAR' value: {name: Finn, initiative: 15}}
const ADD_CHAR = 'ADD_CHAR';
const CHANGE_TURN = 'CHANGE_TURN';
const REMOVE_CHARACTER = 'REMOVE_CHARACTER';

//FUNCTION FOR HANDLING
const turnChanger = (arr) => {
  //if isTurn is true, set to false and if the next elem does not exist set first elem to true
  // I know this is bad form, but leaving this here for humility. I refactored this function twice and had all of these fucking console.logs and what ultimately fucked my code was using a spread operator on an array of objects
  // console.log('function running');
  // let start = arr[0];

  // for (let i = 0; i < arr.length; i++) {
  //   console.log('loop running');
  //   let elem = arr[i];
  //   let next = arr[i + 1];
  //   if (elem.isTurn) {
  //     elem.isTurn = false;
  //     if (next) {
  //       console.log('this is working', elem, next);
  //       next.isTurn = true;
  //       console.log('Next should be true', elem, next);
  //       console.log('The new state looks like', arr);
  //       return arr;
  //     } else {
  //       console.log('this is should be last');
  //       start.isTurn = true;
  //       return arr;
  //     }
  //   }
  // }
  // console.log('this is should be first and should be false', start);
  // start.isTurn = true;
  // console.log('this is should be Second and should be true', start);
  // console.log('on our first time through state is:', arr);
  // return arr;

  let curr = 0;
  let next = 1;
  let final = 2;

  //console.log('This is the current character', arr[curr]);

  let elem = arr[curr];

  if (elem.isTurn) {
    //console.log("should happen if first element is true")
    let nextElem = arr[next];
    elem.isTurn = false;
    nextElem.isTurn = true;
    return arr;
  }

  while (!elem.isTurn) {
    let nextElem = arr[next];
    let finalElem = arr[final];
    if (nextElem) {
      if (nextElem.isTurn) {
        //console.log("from line 69")
        nextElem.isTurn = false;
        finalElem ? (finalElem.isTurn = true) : (arr[0].isTurn = true);
        return arr;
      }
    }
    curr++;
    if (curr > arr.length - 1) {
      //console.log("should restart order")
      arr[0].isTurn = true;
      return arr;
    }

    elem = arr[curr];
    next++;
    final++;
  }
  return arr;
};

//This Reducer allows us to pass in state (see below) and an action object (above) and will make/rerturn changes to state based on the action type
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAR:
      console.log('adding character');
      //This uses the "..." spread operator to insert the current contents of state and add our new value to the array
      let newState = cloneDeep(state)
      newState.push(action.value)
      //This function vvv makes a copy of the array and sorts them in descending order based on initiative
      const value = newState.sort((a, b) => b.initiative - a.initiative);

      return value
    case CHANGE_TURN:
      //console.log('Changing Turn in reducer');
      //this bitch right here vvvv was "statecopy = [...state] which WILL NOT work on an array of objects, and probably (?) will not work for monsters having nested objects
      const stateCopy = cloneDeep(state);
      return turnChanger(stateCopy);
    case REMOVE_CHARACTER:
      return state.filter(character => (character.name !== action.value.name))
    default:
      console.log('something went wrong');
      return state;
  }
};

//Finally this is the component that we're exporting into index.js
const StateProvider = ({ children }) => {
  //use reducer takes our reudcer & initial state from above and returns a function, dispatch, which passes action objects into our reducer and our state
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = { state, dispatch };
  //by setting value to ^^this object we can pass state and dispatch down to our children components

  return <Provider value={value}>{children}</Provider>;
};

export { charContext, StateProvider };
