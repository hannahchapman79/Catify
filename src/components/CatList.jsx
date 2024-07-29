import { useState, useEffect } from "react"
import CatCard from "./CatCard"





const CatList = ({searchTerm}) => {


    fetch(`https://api.thecatapi.com/v1/images/search?limit=${searchTerm}`).then( (response) => {
       return response.json();
    }).then((body) => {
        console.log(body);
    })


    
    const [cats, setCats] = useState(searchTerm)
    return (
        <ol className="cat-list">
            {cats.map((cat) => {
                return <CatCard catId={cat.id} catUrl={cat.url} key={cat.id}/>
            })}
        </ol>
    )
}

export default CatList