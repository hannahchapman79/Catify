import { useState } from "react"
import CatCard from "./CatCard"
import Carousel from 'react-bootstrap/Carousel';

const CatList = ({searchTerm}) => {
    const [cats, setCats] = useState(searchTerm)
    return (
        <Carousel className="cat-list">
            {cats.map((cat) => {
                return <CatCard catId={cat.id} catUrl={cat.url} key={cat.id}/>
            })}
        </Carousel>
    )
}

export default CatList