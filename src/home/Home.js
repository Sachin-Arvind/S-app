import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  return (
    <>
     <Carousel>
      <Carousel.Item interval={1000}>
        <img src='./phou/pic1.jpg' alt='image1' height="600px" width="100%"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src='./phou/pic2.jpg' alt='image1' height="600px" width="100%"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='./phou/pic6.jpg' alt='image1' height="600px" width="100%"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}
