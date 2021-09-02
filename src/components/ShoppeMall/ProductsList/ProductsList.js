import './ProductsList.scss';

function ProductsList(props) {

    return (
        <div className="products-list_wrap">
            <ul className="product-list row" style={props.style}>
                {props.children}
            </ul>
        </div>
    )
}

export default ProductsList;