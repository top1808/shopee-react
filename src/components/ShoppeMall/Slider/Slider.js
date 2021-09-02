import './Slider.scss';
import {useState,useEffect} from 'react'

function Slider() {

    const [sliderIndex, setSliderIndex] = useState(1)

    const images = [
        {
            img: "https://cf.shopee.vn/file/bade9eb22764316155f26c40a6afd58d",
            alt: ""
        },
        {
            img: "https://cf.shopee.vn/file/fad86d777afdd915e0ff090a18c80298",
            alt: ""
        },
        {
            img: "https://cf.shopee.vn/file/2712558117055f7e9c89508d9974b9ef",
            alt: ""
        },
    ]

    const moveDot = (index) => {
        setSliderIndex(index)
    }

    const showDot = () => {
        return images.map((image, index) => {
            return (
                    <div
                        key={index} 
                        className={sliderIndex === index + 1 ? "dot active" : "dot"}
                        onClick={() => moveDot(index + 1)}
                    ></div>
            )
        })
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            sliderIndex === images.length ? setSliderIndex(1) : setSliderIndex(sliderIndex + 1)
        }, 2000)

        return () => clearTimeout(timer)
    }, [sliderIndex])

    const showSlider = (images) => {
        return images.map((image,index) => {
            return (
                <img key={index} src={image.img} className={index + 1 === sliderIndex ? "shopee-mall_slider-img active" : "shopee-mall_slider-img"} alt={image.alt}></img>
            )
        })
    }

    return (
        <div className="shopee-mall_slider">
            {showSlider(images)}
            <div className="dot_container">
                {showDot()}
            </div>
        </div>
    )
}

export default Slider;