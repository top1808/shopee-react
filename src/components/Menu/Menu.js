import {Route, Link} from 'react-router-dom'
import './Menu.scss'

function MenuItem() {

    const menus = [
        {
            img:"https://cf.shopee.vn/file/53d059b1f2592c05b8df8ae835950a2b_xhdpi",
            label: "Yên tâm mua hàng",
            to: "/shoppee"
        },
        {
            img:"https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi",
            label: "Gì cũng rẻ - Từ 1K",
            to: ""

        },
        {
            img:"https://cf.shopee.vn/file/21a4856d1fecd4eda143748661315dba_xhdpi",
            label: "Hoàn xu 15% mỗi ngày",
            to: ""

        },
        {
            img:"https://cf.shopee.vn/file/0c09ab833bc29cb260e9b14794c56977_xhdpi",
            label: "Nạp thẻ, Hoá đơn & E-Voucher",
            to: ""

        },
        {
            img:"https://cf.shopee.vn/file/c7decf2ed8cf3b8f03e8595a808bae03_xhdpi",
            label: "Shopppe số gì đây",
            to: ""

        },
        {
            img:"https://cf.shopee.vn/file/07ee4296b0a33885418670f2e3ffeca0_xhdpi",
            label: "Freeship Xtra",
            to: ""

        },
        {
            img:"https://cf.shopee.vn/file/7971053d6c5db79f83079c7a3d7e6408_xhdpi",
            label: "Hàng hiệu -50% - Voucher 888k",
            to: ""

        },
        {
            img:"https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi",
            label: "Hàng quốc tê",
            to: ""

        },
        {
            img:"https://cf.shopee.vn/file/0a3e3aa16b083d6b7e2c25a8f2c16731_xhdpi",
            label: "Shoppee Premium",
            to: ""

        },
        {
            img:"https://cf.shopee.vn/file/4e32311e7d872547962d1867d39c9027_xhdpi",
            label: "Tech Zone - Siêu thị điện tử",
            to: ""

        }
    ]

    const MenuLink = ({label, to, img}) => {
        return (
            <Route 
                path={to}
                children={() => {
                    return (
                        <li className="menu-item">
                            <Link to={to} className="menu-item-link">
                                <img src={img} className="menu-item-img"/>
                                <div className="menu-item-label">{label}</div>
                            </Link>
                        </li>
                    )
                }}
            />
        )
    }

    function showMenu(menus) {
        var result = null;
        result = menus.map((menu,i) => {
            return (
                <MenuLink 
                    key={i}
                    label={menu.label}
                    to={menu.to}
                    img={menu.img}
                />
            )
        })
        return result
    }

    return (
        <div className="container menu mt-3">
            <ul className="menu-list">
                {showMenu(menus)}
            </ul>
        </div>
    )
}

export default MenuItem;