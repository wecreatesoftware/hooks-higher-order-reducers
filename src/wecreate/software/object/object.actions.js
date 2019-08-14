import {
    SET_OBJECT,
    UPDATE_OBJECT,
} from "./object.types"

/**
 * @desc action creator to update object
 * @param {Object} param - this is object param
 * @param {Object} param.payload - key/value pair(s) to update with
 * @param {Object} [param.meta] - additional meta fields
 * @throws {Error} Action payload must be of type Object
 * @returns {{payload: Object, type: string}}
 */
export const updateObjectAction = ({ payload, meta }) => {
    if (
        typeof payload !== "object"
        || payload.length >= 0
        || payload instanceof Date
        || payload instanceof Set
    ) {
        throw Error("Action payload must be of type Object")
    }

    return {
        type: UPDATE_OBJECT,
        payload,
        ...(meta && { meta }),
    }
}

/**
 * @desc action creator to set object
 * @param {Object} param - this is object param
 * @param {Object} param.object - value to set reducer to
 * @param {Object} [param.meta] - additional meta fields
 * @throws {Error} Action payload must be of type String
 * @returns {{payload: Object, type: String}}
 */
export const setObjectAction = ({ object, meta }) => {
    if (
        typeof object !== "object"
        || object.length >= 0
        || object instanceof Date
        || object instanceof Set
    ) {
        throw Error("Action payload must be of type Object")
    }

    return {
        type: SET_OBJECT,
        payload: object,
        ...(meta && { meta }),
    }
}
