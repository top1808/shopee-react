import './Suggestion.scss';

function Suggestion() {

    const items1= [
        {
            img: "https://cf.shopee.vn/file/296a70762d3141d5e724541199853655_tn",
            price: 101,
            saleOff: 40
        },
        {
            img: "https://cf.shopee.vn/file/c7e9f8308d8bc61ace14f9dc4077f81b_tn",
            price: 101,
            saleOff: ""
        },
        {
            img: "https://cf.shopee.vn/file/ff2c5f48b641243b65264f1231e6a71a_tn",
            price: 102,
            saleOff: 44
        },
    ]

    const items2= [
        {
            img: "https://cf.shopee.vn/file/https:/cf.shopee.vn/file/97a2c8f7cf9c1a48646e081f33a99a45",
            description: "TRẢI NGHIỆM ĐẲNG CẤP",
            saleOff: ""
        },
        {
            img: "https://cf.shopee.vn/file/https:/cf.shopee.vn/file/ea49c205c4f4687fd0fb221fb786407c",
            description: "SIÊU SALE LAPTOP",
            saleOff: ""
        },
        {
            img: "https://cf.shopee.vn/file/https:/cf.shopee.vn/file/ef5be682771415cb7afd964b8e825ede",
            description: "TRẢI NGHIỆM ĐỈNH CAO",
            saleOff: ""
        },
    ]

    function showItem(items) {
        var result = null;
        result = items.map((item, index) => {
            return (
                <li key={index} className="suggestion_products-item">
                    <img src={item.img} className="suggestion_products-item--img"></img>
                    <div className="suggestion_products-item--price">{item.price ? `đ${item.price.toFixed(3).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}` : item.description}</div>
                    <div className={item.saleOff ? "suggestion_products-item--sales-off" : "displayNone"}>
                        <div>{item.saleOff}%</div>GIẢM
                    </div>
                </li>
            )
        })
        return result
    }

    return (
        <div className="container suggestion_wrap mt-20">
            <div className="suggestion_label">HÀNG HIỆU -50%</div>
            <div className="row suggestion_item">
                <div className="suggestion_products">
                    <div className="suggestion_products-header">
                        <div className="suggestion_product-header--label">Sản phẩm bán chạy</div>
                        <a className="suggestion_product-header--more">
                            Xem thêm
                            <i className="suggestion_product-header--more-icon fas fa-chevron-right"></i>
                        </a>
                    </div>
                    <div className="suggestion_products-body mt-4">
                        <ul className="suggestion_products-list">
                            {showItem(items1)}
                        </ul>
                    </div>
                </div>

                <div className="suggestion_products">
                    <div className="suggestion_products-header">
                        <div className="suggestion_product-header--label">Thương hiệu nổi bật</div>
                        <a className="suggestion_product-header--more">
                            Xem thêm
                            <i class="suggestion_product-header--more-icon fas fa-chevron-right"></i>
                        </a>
                    </div>
                    <div className="suggestion_products-body mt-4">
                        <ul className="suggestion_products-list">
                            {showItem(items2)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suggestion