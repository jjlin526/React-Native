/*

useRef

With useRef we can create and update a single mutable value that exists for the lifetime of the component instance.

After assigning the ref to a variable, we use .current to access the mutable value.
Some of the use cases of useRef hook are:
- To access DOM elements (direct DOM manipulation)
- To persist values in successive renders

*/

/*

Example:

In this example, we store the return value of setInterval, which is an interval id, so that we can later call clearInterval.

*/

