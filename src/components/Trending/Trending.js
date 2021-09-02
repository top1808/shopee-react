import './Trending.scss';
import {useState} from 'react'

function Trending() {

    const itemList = [
            {
            items: [
                {
                    img: "https://cf.shopee.vn/file/296a70762d3141d5e724541199853655_tn",
                    name: "Cây Ngoáy Lỗ Tai",
                    quantity:"12",
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
            ],
        },
        {
            items: [
                {
                    img: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
                    name: "Điện thoại",
                    quantity:"32",
                },
                {
                    img: "https://cf.shopee.vn/file/296a70762d3141d5e724541199853655_tn",
                    name: "Cây Ngoáy Lỗ Tai",
                    quantity:"12",
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
            ],
        },
        {
            items: [
                {
                    img: "https://cf.shopee.vn/file/296a70762d3141d5e724541199853655_tn",
                    name: "Cây Ngoáy Lỗ Tai",
                    quantity:"12",
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
            ],
        },
        {
            items: [
                {
                    img: "https://cf.shopee.vn/file/296a70762d3141d5e724541199853655_tn",
                    name: "Cây Ngoáy Lỗ Tai",
                    quantity:"12",
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
                    img: "https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn",
                    name: "Máy ảnh",
                    quantity:"42",
                },
                {
                    img: "https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
                    name: "Laptop",
                    quantity:"32",
                },
            ],
        },
    ]

    const [indexItem, setIndexItem] = useState(0)

    function showItemList(itemList){
        return itemList.map((items, index) => {
                return (
                <ul className={indexItem === index ? "trending-list active" : "trending-list"}>
                    {showItem(items.items)}
                </ul>
                )
        })
    }

    const showItem = (items) => {
        return items.map((item, index) => {
            return (
                <li key={index} className="trending-item" style={{opacity: 1}}>
                    <div className="trending-item-content">
                        <div className="trending-item-name">{item.name}</div>
                        <div className="trending-item-quantity">{item.quantity}k+ sản phẩm</div>
                    </div>
                    <img src={item.img} className="trending-item-img"></img>
                </li>
            )
        })
    }

    const onChange = () => {
        indexItem === itemList.length - 1 ? setIndexItem(0) : setIndexItem(indexItem + 1);
    }

    return (
        <div className="container trending mt-20">
            <div className="trending_header">
                <div className="trending_header-wrap">
                    XU HƯỚNG TÌM KIẾM
                </div>
                <div className="trending_header-more" onClick={onChange}>
                    <i className="trending_header-more-icon fas fa-redo" ></i>
                    Xem Thêm
                </div>
            </div>
            <div className="trending_body">
                    {showItemList(itemList)}
            </div>
        </div>
    )
}

export default Trending;