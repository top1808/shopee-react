import './Cart.scss';
import {connect} from 'react-redux';
import {useEffect} from 'react'
import {onGetCartProductRequest,onDeleteCartProductRequest} from './../../../actions/index'

function Cart(props) {

    const {cartProduct} = props

    useEffect(() => {
        props.onGetCartProduct()
    },[cartProduct.length])

    const showCartProduct = (products) => {
        return products.map((product,index) => {
            return (
                <li key={index} className="header-cart-item">
                    <img src={product.img} alt="" className="header-cart-item-img"/>
                    <div className="header-cart-info">
                        <div className="header-cart-head">
                            <h4 className="header-cart-item-name">{product.name}</h4>
                            <div className="header-cart-wrap-item">
                                <span className="header-cart-item-price">{product.price.toFixed(3).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</span>
                                <span className="header-cart-multi">&times;</span>
                                <span className="header-cart-item-quantity">{product.quantity}</span>
                            </div>
                        </div>

                        <div className="header-card-body">
                            <span className="header-card-description">{product.type}</span>
                            <span className="header-card-remove" onClick={() => onDeleteCartProduct(product.id)}>Xoá</span>
                        </div>
                    </div>
                </li>
            )
        })
    }

    const onDeleteCartProduct = (id) => {
        props.onDeleteCartProduct(id);
    }

    return (
        <div className="header-cart">
            <div className="header-cart-wrap">
                <svg viewBox="0 0 26.6 25.6" className="header-cart-icon">
                    <polyline fill="none" points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1"
                        stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                        stroke-width="2.5"></polyline>
                    <circle fill="#fff" cx="10.7" cy="23" r="2.2" stroke="none"></circle>
                    <circle fill="#fff" cx="19.7" cy="23" r="2.2" stroke="none"></circle>
                </svg>
                {/* <!-- header-cart-no-product --> */}
                <div className="header-cart-list">
                    <img src="./assets/img/no-product.png" alt="" className="header-cart-no-product-img"/>
                    <span className="header-cart-no-product-msg">Chưa có sản phẩm</span>
                    <h3 className="header-cart-heading">Sản phẩm đã thêm</h3>
                    <ul className="header-cart-list-item">
                        {showCartProduct(cartProduct)}
                    </ul>
                    <a className="header-cart-view">
                        <button className="btn btn--primary">Xem giỏ hàng</button>
                    </a>
                </div>
                <span className="header-cart-number">{cartProduct.length}</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartProduct: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCartProduct: () => {
            dispatch(onGetCartProductRequest())
        },
        onDeleteCartProduct: (id) => {
            dispatch(onDeleteCartProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)