import './FlashSale.scss';
import {useState} from 'react'

function FlashSale() {

    const items = [
        {
            img: "https://cf.shopee.vn/file/296a70762d3141d5e724541199853655_tn",
            price: 49.001,
            saleOff: "40",
            quantity:"12",
        },
        {
            img: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
            price: 1000.00,
            saleOff: "",
            quantity:"",
        },
        {
            img: "https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn",
            price: 200.0000001,
            saleOff: "",
            quantity:"",
        },
        {
            img: "https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
            price: 123.123,
            saleOff: "",
            quantity:"",
        },
        {
            img: "https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn",
            price: 111.000100,
            saleOff: "",
            quantity:"",
        },
        {
            img: "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
            price: 200.001,
            saleOff: "",
            quantity:"",
        },
        {
            img: "https://cf.shopee.vn/file/296a70762d3141d5e724541199853655_tn",
            price: 49.001,            saleOff: "40",
            quantity:"12",
        },
        {
            img: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
            price: 1000.00,
            saleOff: "",
            quantity:"",
        },
        {
            img: "https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn",
            price: 200.0000001,
            saleOff: "",
            quantity:"",
        },
        {
            img: "https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
            price: 123.123,
            saleOff: "",
            quantity:"",
        },
        {
            img: "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
            price: 200.001,
            saleOff: "",
            quantity:"",
        },
        {
            img: "https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn",
            price: 111.000100,
            saleOff: "",
            quantity:"",
        },
        {
            img: "https://cf.shopee.vn/file/296a70762d3141d5e724541199853655_tn",
            price: 49.001,            saleOff: "40",
            quantity:"12",
        },
        {
            img: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
            price: 1000.00,
            saleOff: "",
            quantity:"",
        },
        {
            img: "https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn",
            price: 200.0000001,
            saleOff: "",
            quantity:"",
        },
        {
            img: "https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
            price: 123.123,
            saleOff: "",
            quantity:"",
        },
        {
            img: "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
            price: 200.001,
            saleOff: "",
            quantity:"",
        },
    ]

    const [transform, setTransform] = useState(0)

    function showItem(items){
        var result = null;
        result = items.map((item, index) => {
            return (
                <li key={index} className="flash-sale-item">
                        <img src={item.img} className="flash-sale-item--img"></img>
                        <div className="flash-sale-item--price">đ{item.price.toFixed(3).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</div>
                        <div className="flash-sale-item--quantity">ĐÃ BÁN 2</div>
                        <div className="flash-sale-item--sale-off">
                            <div>{item.saleOff}%</div>GIẢM
                        </div>
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
        <div className="container flash-sale mt-20">
            <div className="flash-sale_header">
                <div className="flash-sale_header-wrap">
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/fb1088de81e42c4e538967ec12cb5caa.png" className="flash-sale_header-img"/>
                <div className="flash-sale_header-countdown"></div>
                </div>
                <div className="flash-sale_header-more">
                    Xem tất cả
                    <i class="flash-sale_header-more-icon fas fa-chevron-right"></i>
                </div>
            </div>
            <div className="flash-sale_body">
                <div className="flash-sale-body_wrap">
                    <ul className="flash-sale-list" style={setStyle()}>
                        {showItem(items)}
                    </ul>
                    <div className= {transform === 0 ? "displayNone" : "flash-sale-btn prev"} onClick={onPrevious}><i className= "fas fa-chevron-left"></i></div>
                    <div className= {transform === -2400 ? "displayNone" : "flash-sale-btn next"} onClick={onNext}><i className="fas fa-chevron-right"></i></div>
                </div>
            </div>
        </div>
    )
}

export default FlashSale;