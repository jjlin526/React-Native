/*

Use useState to append to an array

The useState hook can store any type of value: a number, a string, an array, an object, etc.

*/

import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1

export default function App() {
  const [diceRolls, setDiceRolls] = useState([])

  return (
    <View>
      <Button
        title="Roll dice!"
        onPress={() => {
          setDiceRolls([...diceRolls, randomDiceRoll()])
        }}
      />
      {diceRolls.map((diceRoll, index) => (
        <Text style={{ fontSize: 24 }} key={index}>
          {diceRoll}
        </Text>
      ))}
    </View>
  )
}

/*

When we call setDiceRoll, we are not pushing the integer returned from randomDiceRoll() into the diceRolls array. Instead we return a new array containing the destructured diceRolls array and the newly randomized dice roll.

Why?

Hooks can tell React to re-run our component function and update the UI. The useState hook tells React to re-run our component function whenever we call setDiceRolls with a different value. Internally, useState then compares the current value of diceRolls with the value we passed to setDiceRolls using ===. If we are using a mutable value like an array, and we only change its contents, useState will not detect that change and will not tell React to re-run our component function. This will result in our UI displaying old/stale data. To avoid this problem we need to create a new array, so that useState will detect that our data changed and display the newest data.

*/
