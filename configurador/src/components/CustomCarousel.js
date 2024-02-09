import React, { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires
import { useModel } from './hooks/ModelProvider';


export default function CustomCarousel({imgUrls, width, className, state, indexFunc}) {
 
   const images =  imgUrls.map((e, index)=>{
return <div id={e.id} key={index} className={'custom-slide '+e.className}>
                    <img alt={e.alt} className={'slider-img '+e.className}key={index} src={e.url} />
                </div>
    })
    let currentModel = imgUrls.findIndex(indexFunc)
    return (
   <Carousel className={className}selectedItem={currentModel >=0?currentModel: 0} animationHandler="fade" swipeable={false} width={width} autoPlay={false} emulateTouch={false}>
    {images}
   </Carousel>
  )
}
