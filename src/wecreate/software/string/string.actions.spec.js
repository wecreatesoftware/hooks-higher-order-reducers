import { setStringAction } from "./string.actions"
import { SET_STRING } from "./string.types"

describe("string.actions", () => {
    const string = "string"

    describe("setStringAction", () => {
        test("should create an action to set string", () => {
            expect(
                setStringAction({ string }),
            )
                .toEqual({
                    type: SET_STRING,
                    payload: string,
                })
        })

        test("should include additional meta fields", () => {
            expect(
                setStringAction({
                    string,
                    meta: { foo: "bar" },
                }),
            )
                .toEqual({
                    type: SET_STRING,
                    payload: string,
                    meta: {
                        foo: "bar",
                    },
                })
        })
    })

    describe("error", () => {
        test("should throw Error for Object", () => {
            expect(
                () => setStringAction({ string: {} }),
            )
                .toThrow(
                    "Action payload must be of type String",
                )
        })

        test("should throw Error for Array", () => {
            expect(
                () => setStringAction({ string: [] }),
            )
                .toThrow(
                    "Action payload must be of type String",
                )
        })

        test("should throw Error for Number", () => {
            expect(
                () => setStringAction({ string: 0 }),
            )
                .toThrow(
                    "Action payload must be of type String",
                )
        })

        test("should throw Error for Boolean", () => {
            expect(
                () => setStringAction({ string: true }),
            )
                .toThrow(
                    "Action payload must be of type String",
                )
        })

        test("should throw Error for Set", () => {
            expect(
                () => setStringAction({ string: new Set([ { foo: "bar" } ]) }),
            )
                .toThrow(
                    "Action payload must be of type String",
                )
        })

        test("should throw Error for Undefined", () => {
            expect(
                () => setStringAction({ string: undefined }),
            )
                .toThrow(
                    "Action payload must be of type String",
                )
        })

        test("should throw Error for Null", () => {
            expect(
                () => setStringAction({ string: null }),
            )
                .toThrow(
                    "Action payload must be of type String",
                )
        })

        test("should throw Error for Symbol", () => {
            expect(
                () => setStringAction({ string: Symbol("symbol") }),
            )
                .toThrow("Action payload must be of type String")
        })

        test("should throw Error for Function", () => {
            expect(
                () => setStringAction({ string: () => ({}) }),
            )
                .toThrow(
                    "Action payload must be of type String",
                )
        })

        test("should throw Error for Date", () => {
            expect(
                () => setStringAction({ string: new Date() }),
            )
                .toThrow(
                    "Action payload must be of type String",
                )
        })
    })
})
