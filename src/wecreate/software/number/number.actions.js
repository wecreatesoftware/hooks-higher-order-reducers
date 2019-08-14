import {
    DECREMENT_NUMBER,
    INCREMENT_NUMBER,
    SET_NUMBER,
} from "./number.types"

/**
 * @desc action creator to increment number
 * @param {Object} [param] - this is object param
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{type: String}}
 */
export const incrementNumberAction = ({ meta } = {}) => ({
    type: INCREMENT_NUMBER,
    ...(meta && { meta }),
})

/**
 * @desc action creator to decrement number
 * @param {Object} [param] - this is object param
 * @param {Object} [param.allowNegative=undefined] -  used in reducer to restrict negative value
 * @param {Object} [param.meta]
 * @returns {{type: String}}
 */
export const decrementNumberAction = ({ meta = {}, allowNegative = undefined } = {}) => {
    const combined = Object.assign(meta, allowNegative !== undefined && { allowNegative })

    return {
        type: DECREMENT_NUMBER,
        ...(Object.keys(combined).length && { meta: combined }),
    }
}

/**
 * @desc action creator to set number
 * @param {Object} param - this is object param
 * @param {Number} param.number - value to set number reducer to
 * @param {Object} [param.meta] - additional meta fields
 * @throws {Error} Action payload must be of type Number
 * @returns {{payload: Number, type: String}}
 */
export const setNumberAction = ({ number, meta }) => {
    if (typeof number !== "number" || number instanceof Number) {
        throw Error("Action payload must be of type Number")
    }

    return {
        type: SET_NUMBER,
        payload: number,
        ...(meta && { meta }),
    }
}
