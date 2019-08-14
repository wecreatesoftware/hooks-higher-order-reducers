import {
    setBooleanAction,
    toggleBooleanAction,
} from "./boolean.actions"
import {
    SET_BOOLEAN,
    TOGGLE_BOOLEAN,
} from "./boolean.types"

describe("boolean.actions", () => {
    const boolean = false

    describe("toggleBooleanAction", () => {
        test("should create an action to toggle boolean", () => {
            expect(
                toggleBooleanAction(),
            )
                .toEqual({
                    type: TOGGLE_BOOLEAN,
                })
        })

        test("should include additional meta fields", () => {
            expect(
                toggleBooleanAction({
                    meta: { foo: "bar" },
                }),
            )
                .toEqual({
                    type: TOGGLE_BOOLEAN,
                    meta: { foo: "bar" },
                })
        })
    })

    describe("setBooleanAction", () => {
        test("should create an action to set boolean", () => {
            expect(
                setBooleanAction({
                    boolean,
                }),
            )
                .toEqual({
                    type: SET_BOOLEAN,
                    payload: boolean,
                })
        })

        test("should include additional meta fields", () => {
            expect(
                setBooleanAction({
                    boolean,
                    meta: { foo: "bar" },
                }),
            )
                .toEqual({
                    type: SET_BOOLEAN,
                    payload: boolean,
                    meta: { foo: "bar" },
                })
        })
    })

    describe("error", () => {
        test("should throw Error for Object", () => {
            expect(
                () => setBooleanAction({
                    boolean: { foo: "bar" },
                }),
            )
                .toThrow(
                    "Action payload must be of type Boolean",
                )
        })

        test("should throw Error for Array", () => {
            expect(
                () => setBooleanAction({
                    boolean: [],
                }),
            )
                .toThrow(
                    "Action payload must be of type Boolean",
                )
        })

        test("should throw Error for Number", () => {
            expect(
                () => setBooleanAction({
                    boolean: 0,
                }),
            )
                .toThrow(
                    "Action payload must be of type Boolean",
                )
        })

        test("should throw Error for String", () => {
            expect(
                () => setBooleanAction({
                    boolean: "true",
                }),
            )
                .toThrow(
                    "Action payload must be of type Boolean",
                )
        })

        test("should throw Error for Set", () => {
            expect(
                () => setBooleanAction({
                    boolean: new Set([ { foo: "bar" } ]),
                }),
            )
                .toThrow(
                    "Action payload must be of type Boolean",
                )
        })

        test("should throw Error for Undefined", () => {
            expect(
                () => setBooleanAction({
                    boolean: undefined,
                }),
            )
                .toThrow(
                    "Action payload must be of type Boolean",
                )
        })

        test("should throw Error for Null", () => {
            expect(
                () => setBooleanAction({
                    boolean: null,
                }),
            )
                .toThrow(
                    "Action payload must be of type Boolean",
                )
        })

        test("should throw Error for Symbol", () => {
            expect(
                () => setBooleanAction({
                    boolean: Symbol("symbol"),
                }),
            )
                .toThrow(
                    "Action payload must be of type Boolean",
                )
        })

        test("should throw Error for Function", () => {
            expect(
                () => setBooleanAction({
                    boolean: () => ({}),
                }),
            )
                .toThrow(
                    "Action payload must be of type Boolean",
                )
        })

        test("should throw Error for Date", () => {
            expect(
                () => setBooleanAction({
                    boolean: new Date(),
                }),
            )
                .toThrow(
                    "Action payload must be of type Boolean",
                )
        })
    })
})
