import './ProductInfo.scss';
import {useState} from 'react'

function ProductInfo(props) {
    const [quantity, setQuantity] = useState(1)
    const [optionUser, setOptionUser] = useState("")
    const {name, saleOff,product,cartProducts} = props

    const options = [36, 37, 38, 39, 40, 41, 42, 43, "Thêm Vớ"]

    const showSize = (options) => {
        return options.map((option, index) => {
            return (
                <div key={index} id={option} className={option == optionUser ? "product-info_size--option active" : "product-info_size--option"}  onClick={onChose} >{typeof(option) === "number" ? `Size ${option}` : `${option}`} </div>
            )
        })
    }

    const onChose = (e) => {
        setOptionUser(e.target.id)
    }

    const onChange = (e) => {
        const value = e.target.value
        value > 0 ? setQuantity(value) : setQuantity(1)
    }

    const onDecreaseQuantity = () => {
        quantity !== 1 ? setQuantity(quantity-1) : setQuantity(1)
    }

    const onIncreaseQuantity = () => {
        setQuantity(quantity+1)
    }

    const onAddProduct = (product) => {
        product.quantity = 0;
        if (cartProducts.length > 0) {
            cartProducts.map(cartProduct => {
                if (cartProduct.id === product.id) {
                    cartProduct.quantity = cartProduct.quantity + quantity 
                    props.onAddProduct(cartProduct)
                } else {
                    product.quantity = quantity
                    props.onAddProduct(product)
                }
            })
        } else {
            product.quantity = quantity
            props.onAddProduct(product)
        }
    }

    return (
        <div className="product-info">
                    <div className="product-info_name">
                        {name}
                    </div>
                    <div className="product-info_rate">
                        <div className="product-info_rate-star">
                            <span>5.0</span>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="product-info_rate-quantity">
                            <span>11</span>
                            Đánh giá
                        </div>
                        <div className="product-info_sale-quantity">
                            <span>612</span> 
                            Đã Bán
                        </div>
                    </div>
                    <div className="product-info_price">
                        <span className="product-info_price-old">₫64.000 - ₫315.000</span>
                        <span className="product-info_price-current">₫39.434 - ₫179.550</span>
                        <span className="product-info_price-sale-off">{saleOff}% GIẢM</span>
                    </div>
                    <div className="product-info_shipping">
                        Vận chuyển
                        <div className="product-info_shipping_wrap">
                            <i className="fas fa-shipping-fast product-info_shipping_icon"></i>
                            <div>
                                <div className="product-info_shipping-place">
                                    Vận chuyển tới
                                    <select className="product-info_shipping-place--option">
                                        <option>Ba Vì</option>
                                        <option>Hà Nội</option>
                                    </select>
                                </div>
                                <div className="product-info_shipping-price">
                                    Phí vận chuyển
                                    <select className="product-info_shipping-price--option">
                                        <option>Không hỗ trợ</option>
                                        <option>Nhanh</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-info_size">
                        Kích thước
                        <div className="product-info_size--option-wrap">
                            {showSize(options)}
                        </div>
                    </div>
                    <div className="product-info_quantity">
                        Số lượng
                        <div className="product-info_quantity-wrap">
                            <span><i class="fas fa-minus product-info_quantity-icon" onClick={onDecreaseQuantity}></i></span>
                            <input type="text" className="product-info_quantity-input" value={quantity} onChange={onChange}></input>
                            <span><i class="fas fa-plus product-info_quantity-icon" onClick={onIncreaseQuantity}></i></span>
                        </div>
                    </div>
                    <div className="product-info_btn-wrap">
                        <div className="product-info_btn add" onClick={() => onAddProduct(product)}><i class="fas fa-cart-plus"></i>Thêm vào giỏ hàng</div>
                        <div className="product-info_btn buy">Mua ngay</div>
                    </div>
                    <div className="product-info_des">
                        <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/67454c89080444c5997b53109072c9e0.png"/>
                        Shopee Đảm Bảo
                        <span>3 Ngày Trả Hàng / Hoàn tiền</span>
                    </div>
                </div>
    )
}

export default ProductInfo