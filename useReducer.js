/*

The useReducer hook is similar to useState, but gives us a more structured approach for updating complex values.

We typically use useReducer when our state has multiple sub-values, e.g. an object containing keys that we want to update independently.

API:

The useReducer hook requires 2 arguments, and has an optional 3rd argument:

- reducer - a pure function that takes a state and an action, and returns a new state value based on the action
- initialState - any initial state value, just like useState
- initializer (optional) - a function called to lazily instantiate the initialState (this is uncommon)

The useReducer hook returns the current state, and a dispatch function to update the state.

*/

import React, { useReducer } from 'react'
import { View, Text, TextInput } from 'react-native'

function reducer(state, action) {
  switch (action.type) {
    case 'first':
      return {...state, first: action.value }
    case 'last':
      return {...state, last: action.value }
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, {first='', last=''})
  
  return (
    <View>
      <TextInput
          style={{ fontSize: 32}}
          placeholder="First"
          value={state.first}
          onChangeText={(text) => {
             dispatch(state, {type: 'first', value:text})
          }}
      />
      
      <TextInput
          style={{fontSize: 32}}
          placeholder="Last"
          onChangeText={(text)=> {
            dispatch(state, {type: "last",value: text})
          }}
      />
      
      <Text style={{fontSize: 32}}>
        Hello {state.first} {state.last}
      </Text>
    </View>
  )
}

/*

Example:

Store a first and last name in a single state object with useReducer.



*/
