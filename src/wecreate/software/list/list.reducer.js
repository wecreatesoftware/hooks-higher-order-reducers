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
import {
    addItem,
    addItems,
    insertItem,
    removeItem,
    removeItemByKey,
    updateItem,
    updateItemByKey,
    updateItemsByKey,
    updateValueAllItems,
} from "./list.util"

export const listReducer = (state, action = {}) => {
    const { type, payload = {}, meta: { key } = {} } = action

    switch (type) {
        case ADD_ITEM:
            return addItem({
                state,
                payload,
            })
        case ADD_ITEMS:
            return addItems({
                state,
                payload,
            })
        case INSERT_ITEM:
            return insertItem({
                state,
                payload,
            })
        case REMOVE_ITEM:
            return removeItem({
                state,
                payload,
            })
        case REMOVE_ITEM_BY_KEY:
            return removeItemByKey({
                state,
                payload,
                key,
            })
        case UPDATE_ITEM:
            return updateItem({
                state,
                payload,
            })
        case UPDATE_ITEM_BY_KEY:
            return updateItemByKey({
                state,
                payload,
                key,
            })
        case UPDATE_ITEMS_BY_KEY:
            return updateItemsByKey({
                state,
                payload,
                key,
            })
        case UPDATE_VALUE_ALL_ITEMS:
            return updateValueAllItems({
                state,
                payload,
            })
        case SET_LIST:
            return [ ...payload ]
        default:
            throw Error("Action type must be one of [ADD_ITEM, ADD_ITEMS, INSERT_ITEM, REMOVE_ITEM, REMOVE_ITEM_BY_KEY, UPDATE_ITEM, UPDATE_ITEM_BY_KEY, UPDATE_ITEMS_BY_KEY, UPDATE_VALUE_ALL_ITEMS, SET_LIST]")
    }
}
