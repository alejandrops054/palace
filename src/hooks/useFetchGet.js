import { useState, useEffect, useRef } from "react"

const useFetchGet = (url) => {

    const isMounted = useRef(true)

    const [state, setstate] = useState({data: null, loading: true, error: null})

    useEffect(() => {

        return () =>{
            isMounted.current = false
        }
    }, [])

    useEffect(() => {

        setstate({data: null, loading: true, error: null})

        fetch(url)
            .then(resp => resp.json())
            .then(data  =>{
                if(isMounted.current){
                    setstate({
                        loading: false,
                        error: null,
                        data
                    })
                }
            })
            .catch( () =>{
                setstate({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                })
            })

    }, [])

    return state

}

export default useFetchGet;