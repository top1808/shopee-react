import * as Types from './../constants/actionsTypes'
import callApi from './../ulti/apiCaller'

export const actFetchSliderRequest = () => {
    return dispatch => {
        return callApi('sliders', 'GET', null)
            .then((response) => {
                dispatch(actFetchSlider(response.data))
            })
    }
}

export const actFetchSlider = (sliders) => {
    return {
        type: Types.ACT_FETCH_SLIDER,
        sliders
    }
}

export const actFetchProductCategoryRequest = () => {
    return dispatch => {
        return callApi('products-category', 'GET', null)
            .then((response) => {
                dispatch(actFetchProductCategory(response.data))
            })
    }
}

export const actFetchProductCategory = (products) => {
    return {
        type: Types.ACT_FETCH_PRODUCT_CATEGORY,
        products
    }
}

export const actFetchProductSuggestionTodayRequest = () => {
    return dispatch => {
        return callApi('products-suggestion-today', 'GET', null)
            .then((response) => {
                dispatch(actFetchProductSuggestionToday(response.data))
            })
    }
}

export const actFetchProductSuggestionToday = (products) => {
    return {
        type: Types.ACT_FETCH_PRODUCT_SUGGETION_TODAY,
        products
    }
}

export const onGetProductRequest = (id) => {
    return dispatch => {
        return callApi(`products-suggestion-today/${id}`, 'GET', null)
            .then((response) => {
                dispatch(onGetProduct(response.data))
            })
    }
}

export const onGetProduct = (products) => {
    return {
        type: Types.ON_GET_PRODUCT,
        products
    }
}

export const onGetCartProductRequest = () => {
    return dispatch => {
        return callApi('cart', 'GET', null) 
            .then((response) => {
                dispatch(onGetCartProduct(response.data))
            })
    }
}

export const onGetCartProduct = (products) => {
    return {
        type: Types.ON_GET_CART_PRODUCT,
        products
    }
}

export const onPostProductToCartRequest = (product) => {
    return dispatch => {
        console.log(product)
        return callApi('cart', 'POST', product)
            .then((response) => {
                console.log(response)
                dispatch(onPostProductToCart(response.data));
            })
    }
}

export const onPostProductToCart = (product) => {
    return {
        type: Types.ON_POST_PRODUCT_TO_CART,
        product
    }
}

export const onDeleteCartProductRequest = (id) => {
    return dispatch => {
        return callApi(`cart/${id}`, 'DELETE', null) 
            .then((response) => {
                dispatch(onDeleteCartProduct(response.data))
            })
    }
}

export const onDeleteCartProduct = (id) => {
    return {
        type: Types.ON_DELETE_CART_PRODUCT,
        id
    }
}

export const onUpdateCartProductRequest = (product) => {
    return dispatch => {
        return callApi(`cart/${product.id}`, 'PUT', product)
            .then((response) => {
                dispatch(onUpdateCartProduct(response.data))
            })
    }
}

export const onUpdateCartProduct = (product) => {
    return {
        type: Types.ON_UPDATE_CART_PRODUCT,
        product
    }
}

export const onAddHistorySearch = (name) => {
    return {
        type: Types.SEARCH_PRODUCT,
        name
    }
}