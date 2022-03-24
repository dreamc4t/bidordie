import { useEffect, useState } from "react"

const useFetch = ( url ) => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setIsLoading(false)
            setData(data)
        })
    }, [url])



  return {data, isLoading}
}

export default useFetch
