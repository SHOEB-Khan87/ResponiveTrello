export const Add_item = (data) => {
    return {
        type: "Add_item",
        payload: {
            id: new Date().getTime().toString(),
            data: data,
            done: false
        }
    }

}
export const Add_item1 = (data) => {
    return {
        type: "Add_item1",
        payload: {
            id: new Date().getTime().toString(),
            data: data,
            done: false
        }
    }

}

export const Add_item2 = (data) => {
    return {
        type: "Add_item2",
        payload: {
            id: new Date().getTime().toString(),
            data: data,
            done: false
        }
    }

}