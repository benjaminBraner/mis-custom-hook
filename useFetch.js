import { useEffect, useState, useRef } from 'react'

export const useFetch = (url) => {

     /*la idea de este useRef es que mantenga la referencia cuando este hook (useFetch) esta vivo o 
     cuando el componente que lo usa sigue montado*/
     // const isMounted = useRef(true);
     let isMounted = useRef(true);
     const [state, setState] = useState({ data: null, loading: true, error: null })
     
     useEffect(() => {

          //si el componente se desmonta, is mounted.current = false
          return () => {
               /*cabe recalcar que useRef no notifica cuando su contenido cambia. 
               osea que este cambio no va a disparar nuevamente la renderizacion de mi componente a dife-
               rencia del useState, que si yo quiero cambiar la variable de estado, debo usar el setState
               y este obligatoriamente renderiza de nuevo el componente*/
               isMounted.current = false;
          }
     }, [])

     useEffect(() => {

          setState({ data: null, loading: true, error: null })

          fetch(url)
               .then(resp => resp.json())
               .then(data => {

                         if (isMounted.current) {
                              setState({
                                   data,
                                   loading: false,
                                   error: null
                              })
                         } else { console.log("setState no se llamo"); }
               })
               .catch(() => {
                    setState({
                         data: null,
                         loading: false,
                         error: "No se pudo cargar la API"
                    })
               })
     }, [url])

     return state;
}
