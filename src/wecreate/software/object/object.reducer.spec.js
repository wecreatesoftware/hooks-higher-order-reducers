import { useReducer } from "react"
import {
    act,
    renderHook,
} from "@testing-library/react-hooks"
import { objectReducer } from "./object.reducer"
import {
    setObjectAction,
    updateObjectAction,
} from "./object.actions"

describe("object.reducer", () => {
    const initialState = { foo: "bar" }

    describe("initial state", () => {
        test("should return initial state", () => {
            const { result } = renderHook(() => useReducer(objectReducer, initialState))
            const { current: [ state ] } = result

            expect(
                state,
            )
                .toEqual(
                    initialState,
                )
        })
    })
    describe("set object", () => {
        test("should set object to new state", () => {
            const { result } = renderHook(() => useReducer(objectReducer, initialState))
            const { current: [ , dispatch ] } = result

            act(() => {
                dispatch(setObjectAction({ object: { bar: "foo" } }))
            })
            const { current: [ state ] } = result

            expect(
                state,
            )
                .toEqual(
                    { bar: "foo" },
                )
        })
    })
    describe("update object", () => {
        test("should update object with new payload", () => {
            const { result } = renderHook(() => useReducer(objectReducer, initialState))
            const { current: [ , dispatch ] } = result

            act(() => {
                dispatch(updateObjectAction({
                    payload: {
                        foo: "tball",
                        bar: "foo",
                    },
                }))
            })
            const { current: [ state ] } = result

            expect(
                state,
            )
                .toEqual(
                    {
                        foo: "tball",
                        bar: "foo",
                    },
                )
        })
    })
    describe("error ", () => {
        test("should throw type error", () => {
            const { result } = renderHook(() => useReducer(objectReducer, "initial-state"))
            const { current: [ , dispatch ] } = result

            act(() => dispatch({
                type: "unknown",
                object: initialState,
            }))

            expect(
                () => result.current[ 0 ],
            )
                .toThrow(
                    "Action type must be one of [UPDATE_OBJECT, SET_OBJECT]",
                )
        })
    })
})
