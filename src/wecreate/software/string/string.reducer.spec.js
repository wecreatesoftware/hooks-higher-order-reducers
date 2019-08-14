import { useReducer } from "react"
import {
    act,
    renderHook,
} from "@testing-library/react-hooks"
import { stringReducer } from "./string.reducer"
import { setStringAction } from "./string.actions"

describe("string.reducer", () => {
    describe("initial state", () => {
        test("should return initial state", () => {
            const { result } = renderHook(() => useReducer(stringReducer, "initial-state"))
            const { current: [ state ] } = result

            expect(
                state,
            )
                .toEqual(
                    "initial-state",
                )
        })
    })
    describe("set string", () => {
        test("should set string to new-state", () => {
            const { result } = renderHook(() => useReducer(stringReducer, "initial-state"))
            const { current: [ , dispatch ] } = result

            act(() => {
                dispatch(setStringAction({ string: "new-state" }))
            })
            const { current: [ state ] } = result

            expect(
                state,
            )
                .toEqual(
                    "new-state",
                )
        })
    })
    describe("error ", () => {
        test("should throw type error", () => {
            const { result } = renderHook(() => useReducer(stringReducer, "initial-state"))
            const { current: [ , dispatch ] } = result

            act(() => dispatch({
                type: "unknown",
                string: "new-state",
            }))

            expect(
                () => result.current[ 0 ],
            )
                .toThrow(
                    "Action type must be one of [SET_STRING]",
                )
        })
    })
})
