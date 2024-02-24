import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCaroselData';


const items = mainCarouselData.map((item)=><img className='cursor-pointer' role='presentation' src={item.img} alt="" />)
const MainCarosel = () => (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1500}
        infinite
    />
);

export default MainCarosel;







// [
//     <div className="item" data-value="1"><img src="https://source.unsplash.com/random//2100x700?dress" /></div>,
//     <div className="item" data-value="2">2</div>,
//     <div className="item" data-value="3">3</div>,
//     <div className="item" data-value="4">4</div>,
//     <div className="item" data-value="5">5</div>,
// ];
