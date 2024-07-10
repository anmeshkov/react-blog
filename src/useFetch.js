import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError]= useState(null);

    useEffect(()=>{
        console.log('useEffect run');

        setTimeout(()=>{
            fetch(url).then((res) => {
                if (res.ok !== true){
                    throw Error('Could not fetch the data from this resource');
                }
                return res.json()
            }).then((data) => {
                console.log(data);
                setData(data)
                setLoading(false)
                setError(null)
            }).catch((err)=>{
                setError(err.message)
                setLoading(false)
            })
        }, 1000)

    }, [])

    return {data, isLoading, error}
}

export default useFetch;