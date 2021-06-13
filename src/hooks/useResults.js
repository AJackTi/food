import {useEffect, useState} from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        console.log('Hi there!')
        setErrorMessage('')
        try {
            const response = yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            })
            // console.log((await response).data.businesses)
            await setResults((await response).data.businesses)
        } catch (err) {
            // console.log(err)
            setErrorMessage('Something went wrong')
        }
    }

    // Call searchApi when component
    // is first rendered. BAD CODE! DON'T USE
    // searchApi('pasta')

    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [searchApi, results, errorMessage]
}
