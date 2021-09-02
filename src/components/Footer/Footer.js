import './Footer.scss';
import ContentInfoList from './ContentInfoList/ContentInfoList'
import ContentInfoCategory from './ContentInfoCategory/ContentInfoCategory'
import ContentInfoAbout from './ContentInfoAbout/ContentInfoAbout';
import ContentInfoEnd from './ContentInfoEnd/ContentInfoEnd'

function Footer() {

  return (
      <footer className="footer">
        <div className="container">
          <div className="content-info">
            <ContentInfoList/>
          </div>
          <div className="content-info_category">
            <div className="content-info_category-header">DANH MỤC</div>
            <ContentInfoCategory/>
          </div>
        </div>
        <div className="content-info_about">
          <div className="container">
            <ContentInfoAbout/>
            <div className="content-info_about-wrap">
              <div>© 2021 Shopee. Tất cả các quyền được bảo lưu.</div>
              <div>
                Quốc gia và Khu vực: Singapore Indonesia Đài Loan Thái Lan Malaysia Việt Nam Philippines Brazil México Colombia Chile</div>
            </div>
          </div>
        </div>
        <div className="content-info_end">
          <ContentInfoEnd/>
        </div>
      </footer>
  );
}

export default Footer;
