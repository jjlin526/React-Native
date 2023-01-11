/*

We use the useEffect hook to call functions with side effects within our components.

API:

The useEffect hook takes 2 arguments:

- callback - a function with side effects
- dependencies - an optional array containing dependency values

When our component function runs, the callback will be called if any dependencies have changed since the last time the component function ran.

*/

import React, { useState, useEffect } from 'react'
import { Button } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)
  const countEvery3 = Math.floor(count / 3)

  useEffect(() => {
    console.log(countEvery3)
  }, [countEvery3])

  return (
    <Button
      title={`Increment ${count}`}
      onPress={() => {
        setCount(count + 1)
      }}
    />
  )
}

/*

In this example, we will log to the console any time the count is a multiple of 3. The callback is called every time the countEvery3 changes, since countEvery3 is listed as a dependency.

*/

/*

Undefined or empty dependency array

If the dependency array is empty or undefined, useEffect will have a different behavior.

- [] - the callback is called only once, right after the component renders for the first time
- undefined - the callback is called on every component render (every time the component function runs)

*/

/*

undefined dependencies

Here the dependency array is undefined, so our callback will run every time our component function runs, e.g. any time we click the button and useState tells our component to re-run.

*/

import React, { useState, useEffect } from 'react'
import { Button } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Incremented!')
  })

  return (
    <Button
      title={`Increment ${count}`}
      onPress={() => {
        setCount(count + 1)
      }}
    />
  )
}

/*

Here the dependency array is empty, so our callback will only run once (and therefore only log one time).

*/

import React, { useState, useEffect } from 'react'
import { Button } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Only once!')
  }, [])

  return (
    <Button
      title={`Increment ${count}`}
      onPress={() => {
        setCount(count + 1)
      }}
    />
  )
}
