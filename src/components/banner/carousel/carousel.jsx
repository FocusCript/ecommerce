import React, { Component } from "react";
import foto1 from '../../../components/book-images/the5wake.gif'
import foto2 from '../../../components/book-images/susana.gif'
import foto3 from '../../../components/book-images/palm-beach.gif'
import foto4 from '../../../components/book-images/wilder.jpg'
import foto5 from '../../../components/book-images/worldwonders.gif'
import foto6 from '../../../components/book-images/fallout.gif'
import foto7 from '../../../components/book-images/pippa.jpg'

import {Carousel} from '3d-react-carousal';

let slides = [
    <img  src={foto1} alt="1" height='200px'/>  ,
    <img  src={foto2} alt="2" height='200px'/>  ,
    <img  src={foto3} alt="3" height='200px'/>  ,
    <img  src={foto4} alt="4" height='200px'/>  ,
    <img  src={foto5} alt="5" height='200px'/>  ,
    <img  src={foto6} alt="6" height='200px'/>  ,
    <img  src={foto7} alt="7" height='200px'/>  ]     

export const SliderComponent = ()=>{
    return <Carousel slides={slides} autoplay={true} interval={2200}/>
}