import React from "react"
import Expand from "./Expand"
import Carousel from 'react-bootstrap/Carousel';

const CatCard = ({catUrl, catId}) => {
    return (
        <li key={catId} className="cat-card">
            <Expand className="button-and-cat">
                <img key={catUrl} src={catUrl}/>
            </Expand>
        </li>
    )
}

export default CatCard