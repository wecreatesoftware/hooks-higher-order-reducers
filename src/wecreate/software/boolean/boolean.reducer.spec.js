import { useReducer } from "react"
import {
    act,
    renderHook,
} from "@testing-library/react-hooks"
import { booleanReducer } from "./boolean.reducer"
import {
    setBooleanAction,
    toggleBooleanAction,
} from "./boolean.actions"

describe("boolean.reducer", () => {
    describe("initial state", () => {
        test("should return initial state", () => {
            const { result } = renderHook(() => useReducer(booleanReducer, true))
            const { current: [ state ] } = result

            expect(
                state,
            )
                .toEqual(
                    true,
                )
        })
    })
    describe("set boolean", () => {
        test("should set boolean to false", () => {
            const { result } = renderHook(() => useReducer(booleanReducer, true))
            const { current: [ , dispatch ] } = result

            act(() => {
                dispatch(setBooleanAction({ boolean: false }))
            })
            const { current: [ state ] } = result

            expect(
                state,
            )
                .toEqual(
                    false,
                )
        })
    })
    describe("toggle boolean", () => {
        test("should toggle boolean to opposite state", () => {
            const { result } = renderHook(() => useReducer(booleanReducer, false))
            const { current: [ , dispatch ] } = result

            act(() => {
                dispatch(toggleBooleanAction())
            })
            const { current: [ state ] } = result

            expect(
                state,
            )
                .toEqual(
                    true,
                )
        })
    })
    describe("error ", () => {
        test("should throw type error", () => {
            const { result } = renderHook(() => useReducer(booleanReducer, true))
            const { current: [ , dispatch ] } = result

            act(() => dispatch({
                type: "unknown",
                boolean: true,
            }))

            expect(
                () => result.current[ 0 ],
            )
                .toThrow(
                    "Action type must be one of [SET_BOOLEAN, TOGGLE_BOOLEAN]",
                )
        })
    })
})
