import React from "react"
import Carousel from 'react-bootstrap/Carousel';

const CatCard = ({catUrl, catId}) => {
    return (
        <Carousel.Item>
            {/* <ExampleCarouselImage text="First slide" /> */}
            <img key={catUrl} src={catUrl}/>
        </Carousel.Item>
        // <li key={catId} className="cat-card">
    )
}

export default CatCard




    //   <Carousel.Item>
    //     <ExampleCarouselImage text="First slide" />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item> */