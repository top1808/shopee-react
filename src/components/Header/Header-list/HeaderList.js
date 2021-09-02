import {Link} from 'react-router-dom'
import "./HeaderList.scss"

function HeaderList() {
    return (
        <div className="header__navbar">
             <ul className="header__navbar-list">
                <li className="header__navbar-item navbar-item-seperate">
                    <Link to="/ban-hang" target={'_blank'} className="header__navbar-item-link">Kênh Người Bán</Link>
                    </li>
                <li className="header__navbar-qr-link header__navbar-item navbar-item-seperate">
                    <Link to="/dowload-app" target={"_blank"} className="header__navbar-item-link">Tải ứng dụng
                    <div className="header-qr">
                        <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/d91264e165ed6facc6178994d5afae79.png" alt="QR CODE" className="header-qr-link-img"/>
                        <div className="header-qr-app">
                            <span className="header-qr-link">
                                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png" alt="GG PLAY"
                                    className="header-app-download-img"/>
                            </span>
                            <span className="header-qr-link">
                                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png" alt="APP STORE"
                                    className="header-app-download-img"/>
                            </span>
                        </div>
                    </div>
                    </Link>
                </li>
                <li className="header__navbar-item">
                    <span className="navbar-item-text">Kết nối</span>
                    <a href="https://www.facebook.com/" target={"_blank"} className="header__navbar-icon-link"><i className="navbar-icon fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/" target={"_blank"} className="header__navbar-icon-link"><i className="navbar-icon fab fa-instagram"></i></a>

                </li>
            </ul>

            <ul className="header__navbar-list">
                <li className="header__navbar-item header__navar-notify--hover">
                    <Link to="/notification" target={"_blank"} className="header__navbar-icon-notify">
                        <i className="navbar-icon far fa-bell"></i>
                        <span>Thông báo</span>
                    </Link>
                    <div className="header__navbar-notify">
                        <header className="header-notify">
                            <h3>Thông Báo Mới Nhận</h3>
                        </header>
                        <ul className="header-notify-list">
                            <li className="header-notify-item">
                                <a className="header-notify-link">
                                    <div className="header-notify-img"></div>
                                    <div className="header-notify-info">
                                        <p className="header-notify-item--name">Airpod</p>
                                        <p className="header-notify-item--des">San pham tot vlSan pham tot vlSan
                                            pham tot vlSan pham tot vlSan pham tot vlSan pham tot vlSan pham tot
                                            vlSan pham tot vlSan pham tot vlSan pham tot vlSan pham tot vlSan
                                            pham tot vlSan pham tot vlSan pham tot vlSan pham tot vlSan pham tot
                                            vlSan pham tot vlSan pham tot vlSan pham tot vlSan pham tot vlSan
                                            pham tot vlSan pham tot vlSan pham tot vl</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <footer className="header-notify-footer">
                            <a className="header-notify-footer-btn">Xem tất cả</a>
                        </footer>
                    </div>


                </li>
                <li className="header__navbar-item">
                    <Link to="/help" target={"_blank"} className="header__navbar-icon-help">
                        <i className="navbar-icon far fa-question-circle"></i>
                        Hỗ trợ
                    </Link>
                </li>

                <li className="header__navbar-item navbar-item-strong navbar-item-seperate">Đăng kí</li>
                <li className="header__navbar-item navbar-item-strong">Đăng nhập</li>

                {/* <li className="header__navbar-user">
                    <img src="https://cf.shopee.vn/file/4ef16f6acc153ec9b914c90a53e5eef8_tn" alt=""
                        className="header__navbar-user-img"/>
                    <div className="header__navbar-user-wrap">
                        <span className="header__navbar-user-name">Leonard180802</span>
                        <ul className="header__navbar-user-menu">
                            <li className="header__navbar-user-item">Tài khoản của tôi</li>
                            <li className="header__navbar-user-item">Đơn mua</li>
                            <li className="header__navbar-user-item">Đăng xuất</li>
                        </ul>
                    </div>
                </li> */}
            </ul>
        </div>
    )
}

export default HeaderList;