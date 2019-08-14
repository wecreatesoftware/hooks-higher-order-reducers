import { SET_STRING } from "./string.types"

/**
 * @desc action creator to set string
 * @param {Object} param - this is object param
 * @param {String} param.string - value to set reducer to
 * @param {Object} [param.meta] - additional meta fields
 * @throws {Error} Action payload must be of type String
 * @returns {{payload: String, type: String}}
 */
export const setStringAction = ({ string, meta }) => {
    if (typeof string !== "string" || string instanceof String) {
        throw Error("Action payload must be of type String")
    }

    return {
        type: SET_STRING,
        payload: string,
        ...(meta && { meta }),

    }
}
