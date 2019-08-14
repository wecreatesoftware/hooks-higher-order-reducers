import {
    addItemAction,
    addItemsAction,
    insertItemAction,
    removeItemAction,
    removeItemByKeyAction,
    setListAction,
    updateItemAction,
    updateItemByKeyAction,
    updateItemsByKeyAction,
    updateValueAllItemsAction,
} from "./list.actions"
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

describe("list.actions", () => {
    const index = 0
    const item = { id: 0 }

    test("should create an action to insert item", () => {
        expect(
            insertItemAction({
                item,
                index,
            }),
        )
            .toEqual({
                type: INSERT_ITEM,
                payload: {
                    index: 0,
                    item,
                },
            })
    })

    test("should create an action to remove item", () => {
        expect(
            removeItemAction({
                index,
            }),
        )
            .toEqual({
                type: REMOVE_ITEM,
                payload: { index: 0 },
            })
    })

    test("should create an action to remove item by key", () => {
        expect(
            removeItemByKeyAction({
                item,
                key: "id",
            }),
        )
            .toEqual({
                type: REMOVE_ITEM_BY_KEY,
                payload: { item },
                meta: { key: "id" },
            })
    })

    test("should create an action to update item by index", () => {
        expect(
            updateItemAction({
                item,
                index,
            }),
        )
            .toEqual({
                type: UPDATE_ITEM,
                payload: {
                    index: 0,
                    item,
                },
            })
    })

    test("should create an action to update item", () => {
        expect(
            updateItemByKeyAction({
                item,
                key: "id",
            }),
        )
            .toEqual({
                type: UPDATE_ITEM_BY_KEY,
                payload: { item },
                meta: { key: "id" },
            })
    })

    test("should create an action to update items by key", () => {
        const items = [ item, item ]

        expect(
            updateItemsByKeyAction({
                items,
                key: "id",
            }),
        )
            .toEqual({
                type: UPDATE_ITEMS_BY_KEY,
                payload: { items },
                meta: { key: "id" },
            })
    })

    test("should create an action to update value (key/value pairs) for all items", () => {
        const keyValuePairs = { updated: true }

        expect(
            updateValueAllItemsAction({
                keyValuePairs,
            }),
        )
            .toEqual({
                type: UPDATE_VALUE_ALL_ITEMS,
                payload: keyValuePairs,
            })
    })

    test("should create an action to set list", () => {
        expect(
            setListAction({
                payload: [],
            }),
        )
            .toEqual({
                type: SET_LIST,
                payload: [],
            })
    })

    test("should create an action to add item to list (end)", () => {
        expect(
            addItemAction({
                item,
            }),
        )
            .toEqual({
                type: ADD_ITEM,
                payload: item,
            })
    })

    test("should create an action to add items to list (end)", () => {
        expect(
            addItemsAction({
                items: [ item ],
            }),
        )
            .toEqual({
                type: ADD_ITEMS,
                payload: [ item ],
            })
    })
})
