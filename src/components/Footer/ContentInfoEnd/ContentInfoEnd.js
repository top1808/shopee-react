import './ContentInfoEnd.scss'
import anh1 from './../img/anh1.png'

function ContentInfoEnd() {
    return (
        <div className="container">
            <ul className="content-info-end_header-list">
                <li className="content-info-end_header-item">CHÍNH SÁCH BẢO MẬT</li>
                <li className="content-info-end_header-item">QUY CHẾ HOẠT ĐỘNG</li>
                <li className="content-info-end_header-item">CHÍNH SÁCH VẬN CHUYỂN</li>
                <li className="content-info-end_header-item">CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</li>
            </ul>
            <img src={anh1} className="content-info-end_img"></img>
            <div className="content-info-end_wrap">
                <div>Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn</div>
                <div>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)</div>
                <div>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</div>
                <div>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
            </div>
        </div>
    ) 
}

export default ContentInfoEnd;