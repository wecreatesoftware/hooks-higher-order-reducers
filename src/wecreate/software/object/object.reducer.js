import {
    SET_OBJECT,
    UPDATE_OBJECT,
} from "./object.types"

export const objectReducer = (state, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case UPDATE_OBJECT:
            return {
                ...state,
                ...payload,
            }
        case SET_OBJECT:
            return { ...payload }
        default:
            throw Error("Action type must be one of [UPDATE_OBJECT, SET_OBJECT]")
    }
}
