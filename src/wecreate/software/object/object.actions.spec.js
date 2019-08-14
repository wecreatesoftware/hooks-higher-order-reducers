import {
    setObjectAction,
    updateObjectAction,
} from "./object.actions"
import {
    SET_OBJECT,
    UPDATE_OBJECT,
} from "./object.types"

describe("object.actions", () => {
    const object = { foo: "bar" }

    describe("updateObjectAction", () => {
        test("should create an action to increment object", () => {
            expect(
                updateObjectAction({ payload: object }),
            )
                .toEqual({
                    type: UPDATE_OBJECT,
                    payload: object,
                })
        })

        test("should include additional meta fields", () => {
            expect(
                updateObjectAction({
                    payload: object,
                    meta: { bar: "foo" },
                }),
            )
                .toEqual({
                    type: UPDATE_OBJECT,
                    payload: object,
                    meta: { bar: "foo" },
                })
        })
    })

    describe("setObjectAction", () => {
        test("should create an action to set object", () => {
            expect(
                setObjectAction({ object }),
            )
                .toEqual({
                    type: SET_OBJECT,
                    payload: object,
                })
        })

        test("should include additional meta fields", () => {
            expect(
                setObjectAction({
                    object,
                    meta: { foo: "bar" },
                }),
            )
                .toEqual({
                    type: SET_OBJECT,
                    payload: object,
                    meta: { foo: "bar" },
                })
        })
    })

    describe("error", () => {
        describe("setObjectAction", () => {
            test("should throw Error for Array", () => {
                expect(
                    () => setObjectAction({
                        payload: [],
                    }),
                )
                    .toThrow(
                        "Action payload must be of type Object",
                    )
            })

            test("should throw Error for Number", () => {
                expect(
                    () => setObjectAction({
                        payload: 0,
                    }),
                )
                    .toThrow(
                        "Action payload must be of type Object",
                    )
            })

            test("should throw Error for Boolean", () => {
                expect(
                    () => setObjectAction({
                        payload: true,
                    }),
                )
                    .toThrow(
                        "Action payload must be of type Object",
                    )
            })

            test("should throw Error for Undefined", () => {
                expect(
                    () => setObjectAction({
                        payload: undefined,
                    }),
                )
                    .toThrow(
                        "Action payload must be of type Object",
                    )
            })

            test("should throw Error for Symbol", () => {
                expect(
                    () => setObjectAction({
                        payload: Symbol("symbol"),
                    }),
                )
                    .toThrow(
                        "Action payload must be of type Object",
                    )
            })

            test("should throw Error for Function", () => {
                expect(
                    () => setObjectAction({
                        payload: () => ({}),
                    }),
                )
                    .toThrow(
                        "Action payload must be of type Object",
                    )
            })

            test("should throw Error for Date", () => {
                expect(
                    () => setObjectAction({
                        payload: new Date(),
                    }),
                )
                    .toThrow(
                        "Action payload must be of type Object",
                    )
            })
        })
        describe("updateObjectAction", () => {
            test("should throw Error for Array", () => {
                expect(
                    () => updateObjectAction({
                        payload: [],
                    }),
                )
                    .toThrow(
                        "Action payload must be of type Object",
                    )
            })

            test("should throw Error for Number", () => {
                expect(
                    () => updateObjectAction({
                        payload: 0,
                    }),
                )
                    .toThrow(
                        "Action payload must be of type Object",
                    )
            })

            test("should throw Error for Boolean", () => {
                expect(
                    () => updateObjectAction({
                        payload: true,
                    }),
                )
                    .toThrow(
                        "Action payload must be of type Object",
                    )
            })

            test("should throw Error for Set", () => {
                expect(
                    () => updateObjectAction({
                        payload: new Set([ { foo: "bar" } ]),
                    }),
                )
                    .toThrow(
                        "Action payload must be of type Object",
                    )
            })

            test("should throw Error for Undefined", () => {
                expect(
                    () => updateObjectAction({
                        payload: undefined,
                    }),
                )
                    .toThrow(
                        "Action payload must be of type Object",
                    )
            })

            test("should throw Error for Symbol", () => {
                expect(
                    () => updateObjectAction({
                        payload: Symbol("symbol"),
                    }),
                )
                    .toThrow(
                        "Action payload must be of type Object",
                    )
            })

            test("should throw Error for Function", () => {
                expect(
                    () => updateObjectAction({
                        payload: () => ({}),
                    }),
                )
                    .toThrow(
                        "Action payload must be of type Object",
                    )
            })

            test("should throw Error for Date", () => {
                expect(
                    () => updateObjectAction({
                        payload: new Date(),
                    }),
                )
                    .toThrow(
                        "Action payload must be of type Object",
                    )
            })
        })
    })
})
