import { useState } from "react"
import CatList from "./CatList"

const catImages = [
    {
      "id": "6i1",
      "url": "https://cdn2.thecatapi.com/images/6i1.jpg",
      "width": 494,
      "height": 500
    },
    {
      "id": "9fk",
      "url": "https://cdn2.thecatapi.com/images/9fk.jpg",
      "width": 400,
      "height": 306
    },
    {
      "id": "aph",
      "url": "https://cdn2.thecatapi.com/images/aph.jpg",
      "width": 720,
      "height": 960
    },
    {
      "id": "c2b",
      "url": "https://cdn2.thecatapi.com/images/c2b.jpg",
      "width": 1200,
      "height": 900
    },
    {
      "id": "cpk",
      "url": "https://cdn2.thecatapi.com/images/cpk.jpg",
      "width": 1280,
      "height": 765
    },
    {
      "id": "d7s",
      "url": "https://cdn2.thecatapi.com/images/d7s.jpg",
      "width": 324,
      "height": 394
    },
    {
      "id": "dj5",
      "url": "https://cdn2.thecatapi.com/images/dj5.jpg",
      "width": 720,
      "height": 720
    },
    {
      "id": "MjA4MzQ4NQ",
      "url": "https://cdn2.thecatapi.com/images/MjA4MzQ4NQ.jpg",
      "width": 500,
      "height": 325
    },
    {
      "id": "yZE2JpeXz",
      "url": "https://cdn2.thecatapi.com/images/yZE2JpeXz.jpg",
      "width": 1280,
      "height": 720
    },
    {
      "id": "d8AjzQxLp",
      "url": "https://cdn2.thecatapi.com/images/d8AjzQxLp.jpg",
      "width": 1600,
      "height": 1041
    }]

const CatProvider = () => {
    const [searchTerm, setSearchTerm] = useState(catImages)
    return (
        <>
            <CatList searchTerm={searchTerm}/>
        </>
    )
}

export default CatProvider