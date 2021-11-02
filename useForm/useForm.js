import { useState } from 'react'


export const useForm = (initialState = {}) => {

     const [values, setValues] = useState(initialState)

     const handleInputChange = ({ target }) => {
          /*si el valor de un input que ya estaba en el objeto values cambia, la ultima propiedad ([target.name]: target.value)
          sobreescribira esta con su nuevo valor, y si el valor de un input, no estaba en el objeto values, simplemente lo añadira*/
          setValues({
               ...values,
               [target.name]: target.value
          })
     }

     const reset = () => {
          setValues(initialState)
     }

     return [values, handleInputChange, reset]
}
