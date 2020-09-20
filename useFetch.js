import { useState, useEffect, useRef } from "react";

export const useFetch =  (url) => {
    
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
                 error: 'The info could not be loaded'
             })
        })
    }, [url])

    return state;
};
