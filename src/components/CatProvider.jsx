import { useState } from "react"
import CatList from "./CatList"
import CatSearch from "./CatSearch"

const CatProvider = () => {
    const [searchTerm, setSearchTerm] = useState(1)
    return (
        <>
        <CatSearch setSearchTerm={setSearchTerm}/>
            <CatList searchTerm={searchTerm} className="cat-list"/>
        </>
    )
}

export default CatProvider