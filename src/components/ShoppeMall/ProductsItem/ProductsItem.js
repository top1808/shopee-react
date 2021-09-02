import './ProductsItem.scss';

function ProductsItem(props) {
    return (
            <li className="product-item">
                <a className="product-item-link">
                    <img src={props.img} className="product-item-img"></img>
                    <div className="product-item-des">{props.description}</div>
                </a>
            </li>
    )
}

export default ProductsItem;