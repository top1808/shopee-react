import './ProductsList.scss';

function ProductsList(props) {

    return (
        <ul className="suggestion-tody_list row">
            {props.children}
        </ul>
    )
}

export default ProductsList;