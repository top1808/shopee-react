import './ShoppeMall.scss';
import Slider from './Slider/Slider'
import ProductsList from './ProductsList/ProductsList';
import {useState} from 'react';
import ProductsItem from './ProductsItem/ProductsItem'

function ShoppeMall() {

    const products = [
        {
            img: "https://cf.shopee.vn/file/ad799e9763ca607163159ea78c934d1e_xhdpi",
            description: "DHC triệu deal quà hot"
        },
        {
            img: "https://cf.shopee.vn/file/ad799e9763ca607163159ea78c934d1e_xhdpi",
            description: "DHC triệu deal quà hot"
        },
        {
            img: "https://cf.shopee.vn/file/ad799e9763ca607163159ea78c934d1e_xhdpi",
            description: "DHC triệu deal quà hot"
        },
        {
            img: "https://cf.shopee.vn/file/ad799e9763ca607163159ea78c934d1e_xhdpi",
            description: "DHC triệu deal quà hot"
        },
        {
            img: "https://cf.shopee.vn/file/ad799e9763ca607163159ea78c934d1e_xhdpi",
            description: "DHC triệu deal quà hot"
        },
        {
            img: "https://cf.shopee.vn/file/ad799e9763ca607163159ea78c934d1e_xhdpi",
            description: "DHC triệu deal quà hot"
        },
        {
            img: "https://cf.shopee.vn/file/ad799e9763ca607163159ea78c934d1e_xhdpi",
            description: "DHC triệu deal quà hot"
        },
        {
            img: "https://cf.shopee.vn/file/ad799e9763ca607163159ea78c934d1e_xhdpi",
            description: "DHC triệu deal quà hot"
        },
        {
            img: "https://cf.shopee.vn/file/ad799e9763ca607163159ea78c934d1e_xhdpi",
            description: "DHC triệu deal quà hot"
        },
        {
            img: "https://cf.shopee.vn/file/ad799e9763ca607163159ea78c934d1e_xhdpi",
            description: "DHC triệu deal quà hot"
        },
        {
            img: "https://cf.shopee.vn/file/ad799e9763ca607163159ea78c934d1e_xhdpi",
            description: "DHC triệu deal quà hot"
        },
        {
            img: "https://cf.shopee.vn/file/ad799e9763ca607163159ea78c934d1e_xhdpi",
            description: "DHC triệu deal quà hot"
        },
        {
            img: "https://cf.shopee.vn/file/ad799e9763ca607163159ea78c934d1e_xhdpi",
            description: "DHC triệu deal quà hot"
        },
        {
            img: "https://cf.shopee.vn/file/ad799e9763ca607163159ea78c934d1e_xhdpi",
            description: "DHC triệu deal quà hot"
        },
        {
            img: "https://cf.shopee.vn/file/ad799e9763ca607163159ea78c934d1e_xhdpi",
            description: "DHC triệu deal quà hot"
        },
        {
            img: "https://cf.shopee.vn/file/ad799e9763ca607163159ea78c934d1e_xhdpi",
            description: "DHC triệu deal quà hot"
        },
    ]
    const [transform, setTransform] = useState(0)

    function showProducts(products){
        return products.map((product, index) => {
            return (
                <ProductsItem 
                    key={index}
                    img={product.img}
                    description={product.description}
                />
            )
        })
    }


    function onMove() {
        transform === 0 ? setTransform(-790) : setTransform(0)
    }

    function setStyle() {
        return {
            transform: `translateX(${transform}px)`
        }
    }

    return (
        <div className="container shoppe-mall mt-20">
            <div className="shoppe-mall_header">
                <div className="shoppe-mall_header-wrap">
                <a className="shoppe-mall_header-link">SHOPPEE MALL</a>
                <div className="shoppe-mall_header-des-wrap">
                    <div className="shoppe-mall_header-des">7 Ngày Miễn Phí Trả Hàng</div>
                    <div className="shoppe-mall_header-des">Hàng chính hãng 100%</div>
                    <div className="shoppe-mall_header-des">Miễn phí vận chuyển</div>
                </div>
                </div>
                <div className="shoppe-mall_header-more">
                    Xem tất cả
                    <i class="shoppe-mall_header-more-icon fas fa-chevron-right"></i>
                </div>
            </div>
            <div className="shoppe-mall_body">
                <div className="row">
                    <div className="col-sm-4">
                    <Slider/>
                    </div>
                    <div className="col-sm-8 shopee-mall_product">
                        <ProductsList style={setStyle()}>
                            {showProducts(products)}
                        </ProductsList>
                        <div className={transform === 0 ? "shopee-mall-btn next" : "shopee-mall-btn prev"} onClick={onMove}><i className={transform === 0 ? "fas fa-chevron-right" : "fas fa-chevron-left"}></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppeMall;