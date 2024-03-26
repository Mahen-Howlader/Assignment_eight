import { useEffect, useState } from "react";

function useDataget() {

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        const getFunData = async () => {
            setLoading(true)
            const api = await fetch("/booksData.json")
            const covatData = await api.json()
            setData(covatData)
            setLoading(false)
        }
        getFunData()
    }, [])

    return {data,loading};
}

export default useDataget;