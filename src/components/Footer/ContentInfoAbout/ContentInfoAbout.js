import './ContentInfoAbout.scss';

function ContentInfoAbout() {

  const items = [
    {
      header: "CHĂM SÓC KHÁCH HÀNG", 
      links: [
        {
          name: "Trung tâm trợ giúp", 
          to:""
        },
        {
          name: "Shopee Blog", 
          to:""
        },
        {
          name: "Shopee Mall", 
          to:""
        },
        {
          name: "Hướng dẫn mua hàng", 
          to:""
        },
        {
          name: "Hướng dẫn bán hàng", 
          to:""
        },
        {
          name: "Shoppe xu", 
          to:""
        },
      ]
    },
    {
      header: "VỀ SHOPEE", 
      links: [
        {
          name: "Giới thiệu về shoppe Việt Nam", 
          to:""
        },
        {
          name: "Tuyển dụng", 
          to:""
        },
        {
          name: "Điều khoàn Shopee", 
          to:""
        },
        {
          name: "Chính sách bảo mật", 
          to:""
        },
        {
          name: "Chính hãng", 
          to:""
        },
        {
          name: "Kênh người bán", 
          to:""
        },
      ]
    },
    {
      header: "THANH TOÁN", 
      links: [
        {
          name: "Trung tâm trợ giúp", 
          to:""
        },
        {
          name: "Trung tâm trợ giúp", 
          to:""
        },
        {
          name: "Trung tâm trợ giúp", 
          to:""
        },
        {
          name: "Trung tâm trợ giúp", 
          to:""
        },
        {
          name: "Trung tâm trợ giúp", 
          to:""
        },
        {
          name: "Trung tâm trợ giúp", 
          to:""
        },
      ]
    },
    {
      header: "THEO DÕI CHÚNG TÔI TRÊN", 
      links: [
        {
          name: "Facebook", 
          to:""
        },
        {
          name: "Instagram", 
          to:""
        },
        {
          name: "Linkedln", 
          to:""
        },
      ]
    },
    {
      header: "TẢI ỨNG DỤNG SHOPEE NGAY THÔI", 
      links: [
        {
          name: "Trung tâm trợ giúp", 
          to:""
        },
        {
          name: "Trung tâm trợ giúp", 
          to:""
        },
        {
          name: "Trung tâm trợ giúp", 
          to:""
        },
        {
          name: "Trung tâm trợ giúp", 
          to:""
        },
        {
          name: "Trung tâm trợ giúp", 
          to:""
        },
        {
          name: "Trung tâm trợ giúp", 
          to:""
        },
      ]
    },
  ]

  function showLink(links) {
    return links.map((link,index) => {
      return (
        <a key={index} className="content-info_about-item-body-link">{link.name}</a>
      )
  })
}

  function showItem(items) {
    return items.map((item, index) => {
        return (
          <li key={index} className="content-info_about-item">
            <a className="content-info_about-item-header-link">{item.header}</a>
            <div className="content-info_about-item-body">
              {showLink(item.links)}
            </div>
          </li>
        )
    })
  }

  return (
    <ul className="content-info_about-list row">
      {showItem(items)}
    </ul>
  );
}

export default ContentInfoAbout;
