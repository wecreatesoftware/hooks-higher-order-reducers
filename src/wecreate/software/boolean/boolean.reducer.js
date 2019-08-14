import {
    SET_BOOLEAN,
    TOGGLE_BOOLEAN,
} from "./boolean.types"

export const booleanReducer = (state, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case SET_BOOLEAN:
            return payload
        case TOGGLE_BOOLEAN:
            return !state
        default:
            throw Error("Action type must be one of [SET_BOOLEAN, TOGGLE_BOOLEAN]")
    }
}
