import { useState, useEffect } from "react"
import CatCard from "./CatCard"
import axios from "axios"
import loadingAnimation from "./Loading.json"
import Lottie from "lottie-react"

const apiKey = "live_bQMl8MCnVXxltWqn0ROrEbGf9OeVMPbWPPC0gyqaRGpROGsM9OzOtgkVMzlADgpT";

const CatList = ({searchTerm}) => {
    const [cats, setCats] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://api.thecatapi.com/v1/images/search?api_key=${apiKey}&limit=${searchTerm}`).then((response) => {
            setCats(response.data)
            setIsLoading(false)
        })
    }, [searchTerm])

    if (isLoading) {
        return <Lottie className="loading-animation" animationData={loadingAnimation} loop="true"/>
    }

    return (
        <ol className="cat-list">
            {cats.map((cat) => {
                return (
                    <CatCard catId={cat.id} catUrl={cat.url} key={cat.id}/>
                )
            })}
        </ol>
    )
}

export default CatList