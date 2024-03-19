import { useState, useEffect } from 'react'

import storefront from '../assets/store/storefront.jpg'
import seiko_watch from '../assets/jewelery/seiko_watch.jpg'
import necklaces from '../assets/jewelery/necklaces.jpg'
// import heart_pink from '../assets/jewelery/heart_pink.jpg'

const images = [
    { src: storefront, alt: 'Storefront' },
    // { src: heart_pink, alt: 'Pink Heart Necklace' },
    { src: seiko_watch, alt: 'Seiko Watch' },
    { src: necklaces, alt: 'Necklaces' },
]

function Carousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    const goToSlide = (index) => {
        setCurrentImageIndex(index)
    }

    useEffect(() => {
        const timer = setTimeout(goToNextImage, 5000)
        return () => clearTimeout(timer)
    }, [currentImageIndex])

    return (
        <div className="carousel-container w-full">
            {/* Render only the current image */}
            <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="carousel-slide"
            />
            {/* Navigation dots */}
            <div className="carousel-dots mt-2">
                {images.map((image, index) => (
                    <button
                        key={index}
                        className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Carousel
