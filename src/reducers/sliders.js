import * as Types from "../constants/actionsTypes"

const initialState = [];

const sliders = (state = initialState, action) => {
    switch (action.type) {
        case Types.ACT_FETCH_SLIDER:
            state = action.sliders
            return [...state]
        default:
            return [...state]
    }
}

export default sliders;