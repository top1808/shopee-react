import './SuggestionToday.scss';
import ProductsItem from './ProductsItem/ProductsItem'
import ProductsList from './ProductsList/ProductsList'
import {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {actFetchProductSuggestionTodayRequest} from './../../actions/index'

function SuggestionToday(props) {

    const [itemsIndex, setItemsIndex] = useState(0)

    useEffect(() => {
        props.actFetchProduct()
    },[])

    const {products} = props

    function onActive(e) {
        const line = document.querySelector('.suggestion-today_header-line')
        line.style.left = (e.target.offsetLeft - 40) + 'px'
        console.log(line)
        if (e.target.offsetLeft === 40) {
            setItemsIndex(0)
        } else if (e.target.offsetLeft === 268) {
            setItemsIndex(1)
        }
    }


    function showProducts(products) {
        return products.map((product,index) => {
            return (
                <ProductsItem 
                    key={index}
                    index={index}
                    img={product.img}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                    favorites={product.favorites}
                    voucher={product.voucher}
                    saleOff={product.saleOff}
                    id={product.id}
                />
            )
        })
    }

    return (
        <div className="container suggestion-today mt-20">
            <div className="suggestion-today_header">
                <div className="suggestion-today_header-tab" onClick={onActive}>GỢI Ý HÔM NAY</div>
                <div className="suggestion-today_header-tab" onClick={onActive}>
                    <img src="https://cf.shopee.vn/file/d4161ec94bb87d3278003b8e040c300d" alt="file" className="suggestion-today_header-img"></img>
                </div>
                <div className="suggestion-today_header-line"></div>
            </div>
            <div className="suggestion-today_body">
                <div className="suggestion-today_body-products_wrap">
                    <ProductsList>
                        {showProducts(products)}
                    </ProductsList>
                </div>
            </div>
            <div className="btn btn-more mt-20">Xem Thêm</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.productSuggestionToday
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actFetchProduct: () => {
            dispatch(actFetchProductSuggestionTodayRequest())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SuggestionToday);