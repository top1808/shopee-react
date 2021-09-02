import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'
import ProductBriefing from './../../components/ProductBriefing/ProductBriefing'
import {onGetProductRequest, onPostProductToCartRequest,onUpdateCartProductRequest} from './../../actions/index'
import {connect} from 'react-redux'
import {useEffect} from 'react'

function ProductPage(props) {
    const {match, product, cartProducts} = props
    const id = Number(match.params.id)

    useEffect(() => {
        props.onGetProduct(id);
    },[])

    const onAddProduct = (product) => {
        if (cartProducts.length > 0) {
            cartProducts.map(cartProduct => {
                if (cartProduct.id === product.id) {
                    props.onUpdateCartProduct(product)   
                } 
            })
        } else {
            props.onAddProduct(product)
        }
    }

    return (
        <div>
            <Header product={product}/>
            <div className="body mt-120">
                <div className="container">
                    <ProductBriefing product={product} cartProducts={cartProducts} onAddProduct={onAddProduct}/>
                </div>
            </div>
            <Footer/>

        </div>

    )
}

const mapStateToProps = (state) => {
    return {    
        product: state.product,
        cartProducts : state.cart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetProduct: (id) => {
            dispatch(onGetProductRequest(id))
        },
        onAddProduct: (product) => {
            dispatch(onPostProductToCartRequest(product))
        },
        onUpdateCartProduct: (product) => {
            dispatch(onUpdateCartProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)