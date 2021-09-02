import './Slider.scss';
import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {actFetchSliderRequest} from './../../actions/index'

function Slider(props) {
    const [indexSlider, setIndexSlider] = useState(1)

    useEffect(() => {
        props.onFetchSliders()
    },[])
    const {sliders} = props

    function onNextSlide() {
        setIndexSlider(indexSlider + 1)
        if (indexSlider >= sliders.length) {
            setIndexSlider(1)
        }
    }

    function onBackSlide() {
        setIndexSlider(indexSlider - 1)
        if (indexSlider <= 1) {
            setIndexSlider(sliders.length)
        }
    }

    function moveDot(index) {
        setIndexSlider(index)
    }

    useEffect(()=>{
        const timer = setTimeout(() => {
            onNextSlide()
        }, 2000)
        return () => clearTimeout(timer)
    }, [indexSlider])

    function showDot() {
        return sliders.map((img,index) => {
            return (
                    <div 
                        key={index} 
                        className={(indexSlider === index + 1) ? "dot active" : "dot"}
                        onClick={() => moveDot(index + 1)}
                    ></div>
            )
        })
    }

    function showSlider(sliders) {
        return sliders.map((image,i) => {
            return (
                <div className={indexSlider === (i + 1) ? "slider active" : "slider"} key={i}>
                    <img src={indexSlider === (i + 1) ? sliders[i].img : ""} className="slider_img slide-show" alt={image.alt}/>
                    <div className="slider_btn slider_btn-next" onClick={onNextSlide}><i className="fas fa-caret-right"></i></div>
                    <div className="slider_btn slider_btn-previous" onClick={onBackSlide}><i className="fas fa-caret-left"></i></div>
                    <div className="dot-container">
                        {showDot()}
                    </div>
                </div>
            )
        })
    }

    

    return (
        <div className="container">
            <div className="row">
                <div className="slider_container col-sm-8">
                    {showSlider(sliders)}
                </div>
                <div class="col-sm-4">
                    <img src="https://cf.shopee.vn/file/2fb1b8ffdfb4af96c87c6671510b9888_xhdpi" className="slider_img" alt=""/>
                    <img src="https://cf.shopee.vn/file/e7cf640d055378292d0166a8b6e74691_xhdpi" className="slider_img mt-3" alt=""/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        sliders: state.sliders
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchSliders: () => {
            dispatch(actFetchSliderRequest())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Slider);