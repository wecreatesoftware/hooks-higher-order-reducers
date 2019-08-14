import {
    ADD_ITEM,
    ADD_ITEMS,
    INSERT_ITEM,
    REMOVE_ITEM,
    REMOVE_ITEM_BY_KEY,
    SET_LIST,
    UPDATE_ITEM,
    UPDATE_ITEM_BY_KEY,
    UPDATE_ITEMS_BY_KEY,
    UPDATE_VALUE_ALL_ITEMS,
} from "./list.types"

/**
 * @desc action creator to insert item
 * @param {Object} param - this is object param
 * @param {Object} param.item - item to insert
 * @param {Number} param.index - index to insert item at
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{payload: Object, type: string}}
 */
export const insertItemAction = ({ item, index, meta }) => ({
    type: INSERT_ITEM,
    payload: {
        item,
        index,
    },
    ...(meta && { meta }),
})

/**
 * @desc action creator to remove item
 * @param {Object} param - this is object param
 * @param {Number} param.index - index to remove item at
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{payload: Object, type: string}}
 */
export const removeItemAction = ({ index, meta }) => ({
    type: REMOVE_ITEM,
    payload: { index },
    ...(meta && { meta }),
})

/**
 * @desc action creator to remove item by key
 * @param {Object} param - this is object param
 * @param {Object} param.item - item to remove by key
 * @param {String} param.key - key of item to find
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{payload: Object, type: string}}
 */
export const removeItemByKeyAction = ({ item, key, meta }) => ({
    type: REMOVE_ITEM_BY_KEY,
    payload: { item },
    meta: {
        key,
        ...meta,
    },
})

/**
 * @desc action creator to update item
 * @param {Object} param - this is object param
 * @param {Object} param.item - item to update
 * @param {Number} param.index - index to update item at
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{payload: Object, type: string}}
 */
export const updateItemAction = ({ item, index, meta }) => ({
    type: UPDATE_ITEM,
    payload: {
        item,
        index,
    },
    ...(meta && { meta }),
})

/**
 * @desc action creator to update items by key
 * @param {Object} param - this is object param
 * @param {Array} param.items - items to update
 * @param {String} param.key - key of item to find
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{payload: Object, type: string}}
 */
export const updateItemsByKeyAction = ({ items, key, meta }) => ({
    type: UPDATE_ITEMS_BY_KEY,
    payload: { items },
    meta: {
        key,
        ...meta,
    },
})

/**
 * @desc action creator to update item by key
 * @param {Object} param - this is object param
 * @param {Object} param.item - item to update
 * @param {String} param.key - key of item to find
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{payload: Object, type: string}}
 */
export const updateItemByKeyAction = ({ item, key, meta }) => ({
    type: UPDATE_ITEM_BY_KEY,
    payload: { item },
    meta: {
        key,
        ...meta,
    },
})

/**
 * @desc action creator to update a value in all items in the reducer
 * @param {Object} param - this is object param
 * @param {Array} param.keyValuePairs - key/value pair to update on all items
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{payload: Object, type: string}}
 */
export const updateValueAllItemsAction = ({ keyValuePairs, meta }) => ({
    type: UPDATE_VALUE_ALL_ITEMS,
    payload: keyValuePairs,
    ...(meta && { meta }),
})

/**
 * @desc action creator to set list
 * @param {Object} param - this is object param
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{payload: Object, type: string}}
 */
export const setListAction = ({ payload, meta }) => ({
    type: SET_LIST,
    payload,
    ...(meta && { meta }),
})

/**
 * @desc action creator to add item to end of list
 * @param {Object} param - this is object param
 * @param {Object} param.item - item to add to end of list
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{payload: Object, type: string}}
 */
export const addItemAction = ({ item, meta }) => ({
    type: ADD_ITEM,
    payload: item,
    ...(meta && { meta }),
})

/**
 * @desc action creator to add items to end of list
 * @param {Object} param - this is object param
 * @param {Object} param.items - items to add to end of list
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{payload: Object, type: string}}
 */
export const addItemsAction = ({ items, meta }) => ({
    type: ADD_ITEMS,
    payload: items,
    ...(meta && { meta }),
})
