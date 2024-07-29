import React from "react"
import Carousel from 'react-bootstrap/Carousel';

const CatCard = ({catUrl, catId}) => {
    return (
            <li key={catId} className="cat-card">
            <img key={catUrl} src={catUrl}/>
        </li>
    )
}

export default CatCard




