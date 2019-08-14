import { SET_STRING } from "./string.types"

export const stringReducer = (state, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case SET_STRING:
            // Strings are immutable – they cannot change, we can only ever make new strings.
            return payload
        default:
            throw Error("Action type must be one of [SET_STRING]")
    }
}

