import './Category.scss';
import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {actFetchProductCategoryRequest} from './../../actions/index'

function Category(props) {

    const {products} = props

    useEffect(() => {
        props.actFetchProductCategory()
    },[])

    const [transform, setTransform] = useState(0)

    function showItem(products){
        return products.map((product, index) => {
            return (
                <li key={index} className="category-item">
                        <img src={product.img} className="category-item--img"></img>
                        <div className="category-item--des">{product.description}</div>
                </li>
            )
        })
    }

    function onMove() {
        transform === 0 ? setTransform(-360) : setTransform(0)
    }

    function setStyle() {
        return  {
            transform: `translateX(${transform}px)`,
        }
    }

    return (
        <div className="category mt-4">
            <div className="category_header">
                DANH MỤC
            </div>
            <div className="category_body">
                <div className="category-list_wrap">
                    <ul className="category-list" style={setStyle()}>
                        {showItem(products)}
                    </ul>
                    <div className={transform === 0 ? "category-btn next" : "category-btn prev"} onClick={onMove}><i className={transform === 0 ? "fas fa-chevron-right" : "fas fa-chevron-left"}></i></div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.productCategory
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actFetchProductCategory: () => {
            dispatch(actFetchProductCategoryRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);