import {
    SET_BOOLEAN,
    TOGGLE_BOOLEAN,
} from "./boolean.types"

/**
 * @desc action creator to toggle boolean
 * @param {Object} [param] - this is object param
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{type: String}}
 */
export const toggleBooleanAction = ({ meta } = {}) => ({
    type: TOGGLE_BOOLEAN,
    ...(meta && { meta }),
})

/**
 * @desc action creator to set boolean
 * @param {Object} param - this is object param
 * @param {Boolean} param.boolean - value to set reducer to
 * @param {Object} [param.meta] - additional meta fields
 * @throws {Error} Action payload must be of type Boolean
 * @returns {{payload: Boolean, type: String}}
 */
export const setBooleanAction = ({ boolean, meta }) => {
    if (typeof boolean !== "boolean" || boolean instanceof Boolean) {
        throw Error("Action payload must be of type Boolean")
    }

    return {
        type: SET_BOOLEAN,
        payload: boolean,
        ...(meta && { meta }),
    }
}
