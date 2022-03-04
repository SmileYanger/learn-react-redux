import { ADD_PERSON } from '../constants/person'
const initState = [];
export  const person = (pervState = initState, action) => {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...pervState]    
        default:
            return pervState
    }

}