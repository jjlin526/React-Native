/*

We use the useEffect hook to call functions with side effects within our components.

API:

The useEffect hook takes 2 arguments:

- callback - a function with side effects
- dependencies - an optional array containing dependency values

When our component function runs, the callback will be called if any dependencies have changed since the last time the component function ran.

*/

/*

In this example, we will log to the console any time the count is a multiple of 3. The callback is called every time the countEvery3 changes, since countEvery3 is listed as a dependency.

*/
