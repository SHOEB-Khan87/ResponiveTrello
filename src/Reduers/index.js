let initialState = {
    list: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add_item":
            const { id, data, done } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list, {
                        id: id,
                        data: data,
                        done: done
                    }
                ]
            }

            case "Delete_item":
                let newList = state.list.filter(elem => elem.id !== action.id);
                return {
                    ...state,
                    list: newList
                }




        default:
            return state
    }
}


let initialState1 = {
    list1: []
}

export const todoReducer1 = (state = initialState1, action) => {
    switch (action.type) {
        case "Add_item1":
            const { id, data, done } = action.payload;
            return {
                ...state,
                list1: [
                    ...state.list1, {
                        id: id,
                        data: data,
                        done: done
                    }
                ]
            }

            case "Delete_item1":
                let newList = state.list1.filter(elem => elem.id !== action.id);
                return {
                    ...state,
                    list1: newList
                }





        default:
            return state
    }
}



let initialState2 = {
    list2: []
}

export const todoReducer2 = (state = initialState2, action) => {
    switch (action.type) {
        case "Add_item2":
            const { id, data, done } = action.payload;
            return {
                ...state,
                list2: [
                    ...state.list2, {
                        id: id,
                        data: data,
                        done: done
                    }
                ]
            }
            case "Delete_item2":
                let newList = state.list2.filter(elem => elem.id !== action.id);
                return {
                    ...state,
                    list2: newList
                }





        default:
            return state
    }
}



