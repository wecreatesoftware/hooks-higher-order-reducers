import {
    DECREMENT_NUMBER,
    INCREMENT_NUMBER,
    SET_NUMBER,
} from "./number.types"

export const numberReducer = (state, action = {}) => {
    const { type, payload, meta: { allowNegative = true } = {} } = action

    switch (type) {
        case INCREMENT_NUMBER:
            return state + 1
        case DECREMENT_NUMBER:
            if (allowNegative === true) return state - 1
            return Math.max((state - 1), 0)
        case SET_NUMBER:
            return payload
        default:
            throw Error("Action type must be one of [INCREMENT_NUMBER, DECREMENT_NUMBER, SET_NUMBER]")
    }
}
