import React, { useEffect, useState} from "react";

const useCurrencyInfo = (currency) => {

    const [data, setData] = useState({})


    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((response) => response.json())
            .then((response) => setData(response[currency]))
        // console.log(data)
                .catch((error) => console.log('There is some error in fetching' + error))
}, [currency])

    // console.log(data);
    return data

}

export default useCurrencyInfo