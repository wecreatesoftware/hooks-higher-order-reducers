import {
    decrementNumberAction,
    incrementNumberAction,
    setNumberAction,
} from "./number.actions"
import {
    DECREMENT_NUMBER,
    INCREMENT_NUMBER,
    SET_NUMBER,
} from "./number.types"

describe("number.actions", () => {
    const number = 7

    describe("incrementNumberAction", () => {
        test("should create an action to increment number", () => {
            expect(
                incrementNumberAction(),
            )
                .toEqual({
                    type: INCREMENT_NUMBER,
                })
        })

        test("should include additional meta fields", () => {
            expect(
                incrementNumberAction({ meta: { foo: "bar" } }),
            )
                .toEqual({
                    type: INCREMENT_NUMBER,
                    meta: { foo: "bar" },
                })
        })
    })

    describe("decrementNumberAction", () => {
        test("should create an action to decrement number", () => {
            expect(
                decrementNumberAction(),
            )
                .toEqual({
                    type: DECREMENT_NUMBER,
                })
        })

        test("should include additional meta fields", () => {
            expect(
                decrementNumberAction({ meta: { foo: "bar" } }),
            )
                .toEqual({
                    type: DECREMENT_NUMBER,
                    meta: {
                        foo: "bar",
                    },
                })
        })

        test("should include additional meta fields and allowNegatives", () => {
            expect(
                decrementNumberAction({
                    meta: { foo: "bar" },
                    allowNegative: true,
                }),
            )
                .toEqual({
                    type: DECREMENT_NUMBER,
                    meta: {
                        foo: "bar",
                        allowNegative: true,
                    },
                })
        })
    })

    describe("setNumberAction", () => {
        test("should create an action to set number", () => {
            expect(
                setNumberAction({ number }),
            )
                .toEqual({
                    type: SET_NUMBER,
                    payload: number,
                })
        })

        test("should include additional meta fields", () => {
            expect(
                setNumberAction({
                    number,
                    meta: { foo: "bar" },
                }),
            )
                .toEqual({
                    type: SET_NUMBER,
                    payload: number,
                    meta: { foo: "bar" },
                })
        })
    })

    describe("error", () => {
        test("should throw Error for Object", () => {
            expect(
                () => setNumberAction({
                    number: { foo: "bar" },
                }),
            )
                .toThrow(
                    "Action payload must be of type Number",
                )
        })

        test("should throw Error for Array", () => {
            expect(
                () => setNumberAction({
                    number: [],
                }),
            )
                .toThrow(
                    "Action payload must be of type Number",
                )
        })

        test("should throw Error for String", () => {
            expect(
                () => setNumberAction({
                    number: "test string",
                }),
            )
                .toThrow(
                    "Action payload must be of type Number",
                )
        })

        test("should throw Error for Boolean", () => {
            expect(
                () => setNumberAction({
                    number: true,
                }),
            )
                .toThrow(
                    "Action payload must be of type Number",
                )
        })

        test("should throw Error for Set", () => {
            expect(
                () => setNumberAction({
                    number: new Set([ { foo: "bar" } ]),
                }),
            )
                .toThrow(
                    "Action payload must be of type Number",
                )
        })

        test("should throw Error for Undefined", () => {
            expect(
                () => setNumberAction({
                    number: undefined,
                }),
            )
                .toThrow(
                    "Action payload must be of type Number",
                )
        })

        test("should throw Error for Null", () => {
            expect(
                () => setNumberAction({
                    number: null,
                }),
            )
                .toThrow(
                    "Action payload must be of type Number",
                )
        })

        test("should throw Error for Symbol", () => {
            expect(
                () => setNumberAction({
                    number: Symbol("symbol"),
                }),
            )
                .toThrow(
                    "Action payload must be of type Number",
                )
        })

        test("should throw Error for Function", () => {
            expect(
                () => setNumberAction({
                    number: () => ({}),
                }),
            )
                .toThrow(
                    "Action payload must be of type Number",
                )
        })

        test("should throw Error for Date", () => {
            expect(
                () => setNumberAction({
                    number: new Date(),
                }),
            )
                .toThrow(
                    "Action payload must be of type Number",
                )
        })
    })
})
