import './ProductImage.scss';
import {useState, useEffect} from 'react';

function ProductImage(props) {
    const {img} = props
    const productImages = [
        {
            img:img,
            alt:""
        },
        {
            img:"https://cf.shopee.vn/file/cf385ab1a184b082276098a75ddac53a",
            alt:""
        },
        {
            img:"https://cf.shopee.vn/file/61060cc99479123d32a14f401e167e3f_tn",
            alt:""
        },
    ]

    const [transform, setTransform] = useState(0)
    const [isLiked, setIsLiked] = useState(false)
    const [images, setImages] = useState("")

    useEffect(() => {
        setImages(img)
    },[img])

    function showProductsImages(productImages) {
        return productImages.map((productImage, index) => {
            return (
                <img key={index} src={productImage.img} alt={productImage.alt} className={images === productImage.img ? "product-img_more-chose active" : "product-img_more-chose"} onMouseEnter={onChangeImages}></img>
            )
        })
    }

    const onChangeImages = (e) => {
        setImages(e.target.src)
    }

    const onPrevious = () => {
        if (transform < 0) {
            setTransform(transform + 92)
        }
    }

    const onNext = () => {
        const maxWidth = 368;
        if (productImages.length > 5 && transform !== -maxWidth) {
            setTransform(transform - 92)
        }
    }

    const onLike = () => {
        setIsLiked(!isLiked)
    }

    return (
        <div className="product-img_wrap">
            <img src={images} alt="ảnh" className="product-img_main"/>
            <div className="product-img_more">
                <div className="product-img_more-wrap" style={{transform: `translateX(${transform}px)`}}>
                    {showProductsImages(productImages)}
                </div>
                <div className="product-btn prev" onClick={onPrevious}><i class="fas fa-chevron-left"></i></div>
                <div className="product-btn next" onClick={onNext}><i class="fas fa-chevron-right"></i></div>
            </div>
            <div className="product-img_social">
                <div className="product-img_share">
                    Chia sẻ:
                    <a className="product-img_share-link messenger" target={"_blank"} href="https://www.facebook.com/v10.0/dialog/send?app_id=421039428061656&display=popup&link=https%3A%2F%2Fshopee.vn%2Fbiin_sneaker%2F8980303923&redirect_uri=https%3A%2F%2Fshopee.vn%2F-%25F0%259F%2594%2594-X%25E1%25BA%25A2-KHO-Gi%25C3%25A0y-%25F0%259D%2590%258D%25F0%259D%2590%25A2%25F0%259D%2590%25A4%25F0%259D%2590%259E-tr%25E1%25BA%25AFng-%25F0%259D%2590%258D%25F0%259D%2590%25A2%25F0%259D%2590%25A4%25F0%259D%2590%259E-AF1-M%25C3%25A0u-Tr%25E1%25BA%25AFng-B%25E1%25BA%25A3n-%25C4%2590%25E1%25BA%25B9p-Ti%25C3%25AAu-Chu%25E1%25BA%25A9n-Hot-Hit-2021-i.469516001.8980303923%3Fadsid%3D0%26campaignid%3D0%26position%3D0%23close"><i className="fab fa-facebook-messenger"></i></a>
                    <a className="product-img_share-link facebook" target={"_blank"} href="https://www.facebook.com/v10.0/dialog/feed?app_id=421039428061656&link=https%3A%2F%2Fshopee.vn%2Fbiin_sneaker%2F8980303923&redirect_uri=https%3A%2F%2Fshopee.vn%2F-%25F0%259F%2594%2594-X%25E1%25BA%25A2-KHO-Gi%25C3%25A0y-%25F0%259D%2590%258D%25F0%259D%2590%25A2%25F0%259D%2590%25A4%25F0%259D%2590%259E-tr%25E1%25BA%25AFng-%25F0%259D%2590%258D%25F0%259D%2590%25A2%25F0%259D%2590%25A4%25F0%259D%2590%259E-AF1-M%25C3%25A0u-Tr%25E1%25BA%25AFng-B%25E1%25BA%25A3n-%25C4%2590%25E1%25BA%25B9p-Ti%25C3%25AAu-Chu%25E1%25BA%25A9n-Hot-Hit-2021-i.469516001.8980303923%3Fadsid%3D0%26campaignid%3D0%26position%3D0%23close"><i class="fab fa-facebook"></i></a>
                    <a className="product-img_share-link pinterest" target={"_blank"} href="https://www.pinterest.com/pin-builder/?url=https%3A%2F%2Fshopee.vn%2Fbiin_sneaker%2F8980303923&media=https%3A%2F%2Fcf.shopee.vn%2Ffile%2Fcf385ab1a184b082276098a75ddac53a&description=&method=button"><i class="fab fa-pinterest"></i></a>
                    <a className="product-img_share-link twitter" target={"_blank"} href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fshopee.vn%2Fbiin_sneaker%2F8980303923&text="><i class="fab fa-twitter-square"></i></a>
                </div>
                <div className="product-img_seperate"></div>
                <div className="product_favourite">
                    <div className="product_favourite-heart" onClick={onLike}>
                        <i className={isLiked ? "fas fa-heart" : "far fa-heart"}></i>
                    </div>
                    Đã thích (3k)
                </div>
            </div>
        </div>
    )
}

export default ProductImage;