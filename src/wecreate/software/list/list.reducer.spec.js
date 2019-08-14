import { useReducer } from "react"
import {
    act,
    renderHook,
} from "@testing-library/react-hooks"
import { listReducer } from "./list.reducer"
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

jest.mock("./list.util")

describe("list.reducer", () => {
    const index = 0
    const item = { id: 1000 }

    let action

    beforeEach(() => {
        jest.clearAllMocks()
        action = {
            payload: {
                item,
                index,
            },
        }
    })

    describe("INSERT_ITEM", () => {
        test("should call insertItem", () => {
            action = {
                ...action,
                type: INSERT_ITEM,
            }
            const { result } = renderHook(() => useReducer(listReducer, []))
            const { current: [ , dispatch ] } = result

            act(() => {
                dispatch(action)
            })

            expect(
                insertItem,
            )
                .toHaveBeenCalledTimes(
                    1,
                )
        })
    })

    describe("REMOVE_ITEM", () => {
        test("should call removeItem", () => {
            action = {
                ...action,
                type: REMOVE_ITEM,
            }
            const { result } = renderHook(() => useReducer(listReducer, []))
            const { current: [ , dispatch ] } = result

            act(() => {
                dispatch(action)
            })

            expect(
                removeItem,
            )
                .toHaveBeenCalledTimes(
                    1,
                )
        })
    })

    describe("REMOVE_ITEM_BY_KEY", () => {
        test("should call removeItemByKey", () => {
            action = {
                ...action,
                type: REMOVE_ITEM_BY_KEY,
            }
            const { result } = renderHook(() => useReducer(listReducer, []))
            const { current: [ , dispatch ] } = result

            act(() => {
                dispatch(action)
            })

            expect(
                removeItemByKey,
            )
                .toHaveBeenCalledTimes(
                    1,
                )
        })
    })

    describe("UPDATE_ITEM", () => {
        test("should call updateItem", () => {
            action = {
                ...action,
                type: UPDATE_ITEM,
            }
            const { result } = renderHook(() => useReducer(listReducer, []))
            const { current: [ , dispatch ] } = result

            act(() => {
                dispatch(action)
            })

            expect(
                updateItem,
            )
                .toHaveBeenCalledTimes(
                    1,
                )
        })
    })

    describe("UPDATE_ITEM_BY_KEY", () => {
        test("should call updateItemByKey", () => {
            action = {
                ...action,
                type: UPDATE_ITEM_BY_KEY,
            }
            const { result } = renderHook(() => useReducer(listReducer, []))
            const { current: [ , dispatch ] } = result
            act(() => {
                dispatch(action)
            })

            expect(
                updateItemByKey,
            )
                .toHaveBeenCalledTimes(
                    1,
                )
        })
    })

    describe("UPDATE_ITEMS_BY_KEY", () => {
        test("should call updateItemsByKey", () => {
            action = {
                ...action,
                type: UPDATE_ITEMS_BY_KEY,
            }
            const { result } = renderHook(() => useReducer(listReducer, []))
            const { current: [ , dispatch ] } = result

            act(() => {
                dispatch(action)
            })

            expect(
                updateItemsByKey,
            )
                .toHaveBeenCalledTimes(
                    1,
                )
        })
    })

    describe("UPDATE_VALUE_ALL_ITEMS", () => {
        test("should call updateValueAllItems", () => {
            action = {
                ...action,
                type: UPDATE_VALUE_ALL_ITEMS,
            }
            const { result } = renderHook(() => useReducer(listReducer, []))
            const { current: [ , dispatch ] } = result

            act(() => {
                dispatch(action)
            })

            expect(
                updateValueAllItems,
            )
                .toHaveBeenCalledTimes(
                    1,
                )
        })
    })

    describe("SET_LIST", () => {
        test("should return a brand new state", () => {
            action = {
                ...action,
                type: SET_LIST,
                payload: [ { id: 0 } ],
            }
            const { result } = renderHook(() => useReducer(listReducer, []))
            const { current: [ , dispatch ] } = result

            act(() => {
                dispatch(action)
            })

            const { current: [ state ] } = result

            expect(
                state,
            )
                .toEqual(
                    [ { id: 0 } ],
                )
        })
    })

    describe("ADD_ITEM", () => {
        test("should call addItem", () => {
            action = {
                ...action,
                type: ADD_ITEM,
                payload: item,
            }
            const { result } = renderHook(() => useReducer(listReducer, []))
            const { current: [ , dispatch ] } = result

            act(() => {
                dispatch(action)
            })

            expect(
                addItem,
            )
                .toHaveBeenCalledTimes(
                    1,
                )
        })
    })

    describe("ADD_ITEMS", () => {
        test("should call addItems", () => {
            action = {
                ...action,
                type: ADD_ITEMS,
                payload: [ item ],
            }
            const { result } = renderHook(() => useReducer(listReducer, []))
            const { current: [ , dispatch ] } = result

            act(() => {
                dispatch(action)
            })

            expect(
                addItems,
            )
                .toHaveBeenCalledTimes(
                    1,
                )
        })
    })

    describe("error ", () => {
        test("should throw type error", () => {
            const { result } = renderHook(() => useReducer(listReducer, []))
            const { current: [ , dispatch ] } = result

            act(() => dispatch({
                type: "unknown",
            }))

            expect(
                () => result.current[ 0 ],
            )
                .toThrow(
                    "Action type must be one of [ADD_ITEM, ADD_ITEMS, INSERT_ITEM, REMOVE_ITEM, REMOVE_ITEM_BY_KEY, UPDATE_ITEM, UPDATE_ITEM_BY_KEY, UPDATE_ITEMS_BY_KEY, UPDATE_VALUE_ALL_ITEMS, SET_LIST]",
                )
        })
    })
})
