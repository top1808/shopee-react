import './ProductsItem.scss';
import {Link} from 'react-router-dom'

function ProductsItem(props) {
    const {id,img, name, price, quantity, favorites, voucher, saleOff, index, itemsIndex} = props;
    return (
        <li className="suggestion-today_item">
            <Link to={`/product/${name} - ${id}`} className="suggestion-today_item-link">
                <div className="suggestion-today_item-wrap">
                    <img src={img} alt={name} className="suggestion-today_item-img"></img>
                    <div className="suggestion-today_item-container">
                        <div className="suggestion-today_item-name">{name}</div>
                        <div className={voucher ? "suggestion-today_item-voucher" : "displayNone"}>{voucher ? `Giảm đ${voucher}k` : ""}</div>
                        <div className="suggestion-today_item-content">
                            <div className="suggestion-today_item-price">đ{price.toFixed(3).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</div>
                            <div className="suggestion-today_item-quantity">Đã bán {quantity}k</div>
                        </div>
                    </div>
                    <div className={favorites ? "suggestion-today_item-label" : "displayNone"}>{favorites ? "Yêu thích+" : ""}</div>
                    <div className="suggestion-today_item-search">Tìm sản phẩm tương tự</div>
                    <div className={saleOff ? "flash-sale-item--sale-off" : "displayNone"}>
                        {saleOff ? `${saleOff}%` : ""}
                        <div>Giảm</div>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default ProductsItem;