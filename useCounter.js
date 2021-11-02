import { useState } from "react"

export const useCounter = (initialState = 10) => {
   const [counter, setCounter] = useState(initialState)
   
   const increment = () => {
      setCounter(counter + 1);

   }
   
   const decrement = (numDec = 1) => {
      setCounter(counter - numDec);
   }

   const reset = () => {
      setCounter(initialState);
   }

   const counterSkip = (dependency, skip) => {
      if (counter === dependency) {
         setCounter(skip)
      }
   }

   return {
      counter,
      increment,
      decrement,
      reset,
      counterSkip
   }
}
