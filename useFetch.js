import { useState, useEffect, useRef } from "react";

export const useFetch =  (url) => {
    
    //se utiliza como referencia para comprobar que el component está montado
    const isMounted = useRef(true);
    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
    
    setState({data: null, loading: true, error: null});

       fetch(url)
        .then(res => res.json())
        .then(data => {
                 if(isMounted.current) {
                     setState({
                         error: null,
                         data,
                         loading: false
                     })   
                 };
        })
        .catch(() => {
             setState({
                 data: null,
                 loading: false,
                 error: 'No se pudo cargar la info'
             })
        })
    }, [url])

    return state;
};
