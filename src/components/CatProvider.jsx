import { useState } from "react"
import CatList from "./CatList"
import CatSearch from "./CatSearch"

const CatProvider = () => {
    const [searchTerm, setSearchTerm] = useState(1)
    const [breed, setBreed] = useState("")
    return (
        <>
        <CatSearch setSearchTerm={setSearchTerm} setBreed={setBreed}/>
            <CatList searchTerm={searchTerm} className="cat-list" breed={breed}/>
        </>
    )
}

export default CatProvider