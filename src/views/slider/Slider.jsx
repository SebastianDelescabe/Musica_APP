import React, { useEffect, useRef, useState } from 'react';
import SlideCard from '../sliderCard/SliderCard';
import { slideImages } from '../../assets';
import { motion } from 'framer-motion';
import './Slider.css'

const Slider = () => {

    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if (slideImages.length !== 0) {
            setWidth(carousel.current.scrollWidth - (carousel.current.offsetWidth));
        }
    })

    const halfArray = Math.floor(slideImages.length / 2)

    return (
        <div className='slider-landing'>
            <div className='slider__header'>
                <span className='slider__header-title'>Los mas escuchados</span>
                <span className='slider__header-subtitle'> Disfruta de tu música a un solo click y descube que discos has guardado dentro de “mis álbumes”</span>
            </div>
            <motion.div ref={carousel} className='slider__carousel-container'>
                <motion.div className='slider__carousel' drag='x' dragConstraints={{ right: 0, left: -width }}>
                    {
                        slideImages && slideImages.map((image, i) => (
                            <motion.div key={image + i} className='slider__carousel-item'>
                                <SlideCard
                                    image={image}
                                    index={i}
                                    halfArray={halfArray}
                                />
                            </motion.div>
                        ))
                    }
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Slider