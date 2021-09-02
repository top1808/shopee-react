import './ProductBriefing.scss';
import ProductImage from './ProductImage/ProductImage'
import ProductInfo from './ProductInfo/ProductInfo'


function ProductsBriefing(props) {

    const {product,cartProducts} = props

    return (
        <div className="product row">
            <div className="col-sm-5">
                <ProductImage img={product.img}/>
            </div>
            <div className="col-sm-7">
                <ProductInfo product={product} cartProducts={cartProducts} name={product.name} saleOff={product.saleOff} onAddProduct={props.onAddProduct}/>
            </div>
        </div>
    )
}



export default ProductsBriefing