import './TopSearch.scss';
import {useState} from 'react'


function TopSearch() {

    const items = [
        {
            img: "https://cf.shopee.vn/file/084616c2ee1bb7eaa8a4c7b5f7cccb56_tn",
            name: "Móc Quần Áo Nhôm",
            quantity:"2",
        },
        {
            img: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
            name: "Điện thoại",
            quantity:"32",
        },
        {
            img: "https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn",
            name: "Tivi",
            quantity:"11",
        },
        {
            img: "https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
            name: "Laptop",
            quantity:"32",
        },
        {
            img: "https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn",
            name: "Máy ảnh",
            quantity:"42",
        },
        {
            img: "https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn",
            name: "Máy ảnh",
            quantity:"42",
        },
        {
            img: "https://cf.shopee.vn/file/084616c2ee1bb7eaa8a4c7b5f7cccb56_tn",
            name: "Móc Quần Áo Nhôm",
            quantity:"2",
        },
        {
            img: "https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn",
            name: "Tivi",
            quantity:"11",
        },
        {
            img: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
            name: "Điện thoại",
            quantity:"32",
        },
        {
            img: "https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
            name: "Laptop",
            quantity:"32",
        },
        {
            img: "https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn",
            name: "Máy ảnh",
            quantity:"42",
        },
        {
            img: "https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn",
            name: "Máy ảnh",
            quantity:"42",
        },
        {
            img: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
            name: "Điện thoại",
            quantity:"32",
        },
        {
            img: "https://cf.shopee.vn/file/084616c2ee1bb7eaa8a4c7b5f7cccb56_tn",
            name: "Móc Quần Áo Nhôm",
            quantity:"2",
        },
        {
            img: "https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn",
            name: "Tivi",
            quantity:"11",
        },
        {
            img: "https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
            name: "Laptop",
            quantity:"32",
        },
        {
            img: "https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn",
            name: "Tivi",
            quantity:"11",
        },
        {
            img: "https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
            name: "Laptop",
            quantity:"32",
        },
    ]


    const [transform, setTransform] = useState(0)
    

    function showItem(items){
        var result = null;
        result = items.map((item, index) => {
            return (
                <li key={index} className="top-search-item">
                    <img src={item.img} className="top-search-item-img"/>
                    <div className="top-search-item-quantity">Bán {item.quantity}k+/Tháng</div>
                    <div className="top-search-item-label">TOP</div>
                    <div className="top-search-item-name">{item.name}</div>
                </li>
            )
        })
        return result
    }

    function onNext() {
        setTransform(transform - 1200)
    }

    function onPrevious() {
        setTransform(transform + 1200)
    }

    function setStyle() {
        return {
            transform: `translateX(${transform}px)`
        }
    }

    return (
        <div className="container top-search mt-20">
            <div className="top-search_header">
                <div className="top-search_header-wrap">
                    TÌM KIẾM HÀNG ĐẦU
                </div>
                <div className="top-search_header-more">
                    Xem tất cả
                    <i class="top-search_header-more-icon fas fa-chevron-right"></i>
                </div>
            </div>
            <div className="top-search_body">
                <div className="top-search_body-list_wrap">
                    <ul className="top-search-list" style={setStyle()}>
                        {showItem(items)}
                    </ul>
                </div>
                <div className= {transform === 0 ? "displayNone" : "top-search-btn prev"} onClick={onPrevious}><i className= "fas fa-chevron-left"></i></div>
                <div className= {transform === -2400 ? "displayNone" : "top-search-btn next"} onClick={onNext}><i className="fas fa-chevron-right"></i></div>
            </div>
        </div>
    )
}

export default TopSearch;