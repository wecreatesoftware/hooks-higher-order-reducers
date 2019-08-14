# hooks-higher-order-reducers

[![NPM Version](https://img.shields.io/npm/v/@wecreatesoftware/hooks-higher-order-reducers.svg?branch=master)](https://www.npmjs.com/package/@wecreatesoftware/hooks-higher-order-reducers)
[![Build Status](https://travis-ci.org/wecreatesoftware/hooks-higher-order-reducers.svg?branch=master)](https://travis-ci.org/wecreatesoftware/hooks-higher-order-reducers)
[![License](https://img.shields.io/npm/l/@wecreatesoftware/hooks-higher-order-reducers.svg)](https://github.com/wecreatesoftware/hooks-higher-order-reducers/blob/master/LICENSE)
[![Coverage Status](https://coveralls.io/repos/github/wecreatesoftware/hooks-higher-order-reducers/badge.svg?branch=master)](https://coveralls.io/github/wecreatesoftware/hooks-higher-order-reducers?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/npm/@wecreatesoftware/hooks-higher-order-reducers/badge.svg)](https://snyk.io/test/npm/@wecreatesoftware/hooks-higher-order-reducers)
[![Downloads](https://img.shields.io/npm/dt/@wecreatesoftware/hooks-higher-order-reducers.svg)](https://www.npmjs.com/package/@wecreatesoftware/hooks-higher-order-reducers)
[![dependabot](https://api.dependabot.com/badges/status?host=github&repo=wecreatesoftware/hooks-higher-order-reducers)](https://dependabot.com/)

###This is a hook version of [redux-higher-order-reducers](https://www.npmjs.com/package/@wecreatesoftware/redux-higher-order-reducers)

https://redux.js.org/recipes/structuring-reducers/reusing-reducer-logic

How to use the reusable reducers ...

[JS Docs](https://doc.esdoc.org/github.com/wecreatesoftware/hooks-higher-order-reducers/)

Currently, there is stringReducer, booleanReducer, listReducer and objectReducer and numberReducer...

[useReducer Hook](https://reactjs.org/docs/hooks-reference.html#usereducer)

## List Reducer Actions
* addItemAction - add item to list (end).
* addItemsAction - add items to list (end).
* insertItemAction - insert item into list at given index.
* removeItemAction - remove item from list at given index.
* removeItemByKeyAction - remove item from list by "key".
* updateItemAction - update item at given index.
* updateItemByKeyAction - update item by "key".
* updateItemsByKeyAction - update items by "key".
* updateValueAllItemsAction - update key/value pair(s) on all items.
* setListAction - completely use new state and override current.

```javascript
addItemAction({ 
    item: { id: 1 },
})

addItemsAction({ 
    items: [ { id: 1 } ],
})

insertItemAction({ 
    item: { id: 1 }, 
    index: 3,
})

removeItemAction({
    index: 3,
})

removeItemByKeyAction({ 
    item: { id: 1 },
    key: "id",
})

updateItemAction({ 
    item: { 
        id: 1, 
        newKey: "newValue" 
    }, 
    index: 3,
})

updateItemByKeyAction({ 
    item: {
        id: 1, 
        foo: "bar" 
    },
    key: "id",
})

updateItemsByKeyAction({ 
    items: [ 
        {
            id: 1, 
            foo: "bar" 
        }, 
        {
            id: 2, 
            cool: "beans" 
        },
    ],
    key: "id",
})

updateValueAllItemsAction({ 
    keyValuePairs: {
        foo: bar,
        updated: true,
        collapsed: true,
    }
})

setListAction({ 
    payload: [],
})
```

## Object Reducer Actions
* updateObjectAction - update object key/value, can pass multiple key/value pair.
* setObjectAction - completely use new state and override current.
    
```javascript
updateObjectAction({ 
    payload: { loading: true }, 
})

resetObjectAction()

setObjectAction({ 
    payload: {},
})
```

## String Reducer Actions
* setStringAction - completely use new state and override current.
    
```javascript
setStringAction({ 
    string: "foo bar",
})
```

## Boolean Reducer Actions
* setBooleanAction - completely use new state and override current.
* toggleBooleanAction - toggle the state of the boolean.
    
```javascript
setBooleanAction({ 
    payload: true,
})

toggleBooleanAction()

```

## Number Reducer Actions
* incrementNumberAction - increment number.
* decrementNumberAction - decrement number.
* setNumberAction - set number.
    
```javascript
incrementNumberAction()

decrementNumberAction()

setNumberAction({ 
    number: 100,
})

```

Each reducer, consider it like a micro service, it does one thing and one thing well.
