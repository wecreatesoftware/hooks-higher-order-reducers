import { useReducer } from "react"
import {
    act,
    renderHook,
} from "@testing-library/react-hooks"
import { numberReducer } from "./number.reducer"
import {
    decrementNumberAction,
    incrementNumberAction,
    setNumberAction,
} from "./number.actions"

describe("number.reducer", () => {
    describe("initial state", () => {
        test("should return initial state", () => {
            const { result } = renderHook(() => useReducer(numberReducer, 5))
            const { current: [ state ] } = result

            expect(
                state,
            )
                .toEqual(
                    5,
                )
        })
    })
    describe("set number", () => {
        test("should set number to new-state", () => {
            const { result } = renderHook(() => useReducer(numberReducer, 1))
            const { current: [ , dispatch ] } = result

            act(() => {
                dispatch(setNumberAction({ number: 4 }))
            })
            const { current: [ state ] } = result

            expect(
                state,
            )
                .toEqual(
                    4,
                )
        })
    })
    describe("increment number", () => {
        test("should increment number", () => {
            const { result } = renderHook(() => useReducer(numberReducer, 1))
            const { current: [ , dispatch ] } = result

            act(() => {
                dispatch(incrementNumberAction())
            })
            const { current: [ state ] } = result

            expect(
                state,
            )
                .toEqual(
                    2,
                )
        })
    })
    describe("decrement number", () => {
        test("should decrement number", () => {
            const { result } = renderHook(() => useReducer(numberReducer, 0))
            const { current: [ , dispatch ] } = result

            act(() => {
                dispatch(decrementNumberAction())
            })
            const { current: [ state ] } = result

            expect(
                state,
            )
                .toEqual(
                    -1,
                )
        })
        test("should decrement number but not go go negative", () => {
            const { result } = renderHook(() => useReducer(numberReducer, 0))
            const { current: [ , dispatch ] } = result

            act(() => {
                dispatch(decrementNumberAction({ allowNegative: false }))
            })
            const { current: [ state ] } = result

            expect(
                state,
            )
                .toEqual(
                    0,
                )
        })
    })
    describe("error ", () => {
        test("should throw type error", () => {
            const { result } = renderHook(() => useReducer(numberReducer, "initial-state"))
            const { current: [ , dispatch ] } = result

            act(() => dispatch({
                type: "unknown",
                number: "new-state",
            }))

            expect(
                () => result.current[ 0 ],
            )
                .toThrow(
                    "Action type must be one of [INCREMENT_NUMBER, DECREMENT_NUMBER, SET_NUMBER]",
                )
        })
    })
})
