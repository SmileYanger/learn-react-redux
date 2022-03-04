import {INCREMNT, DECREMENT} from '../constants/count'
//初始化值
const initState = 0;
export const count = (preState = initState, action) => {
    const { type, data} = action;
    switch (type) {
        case INCREMNT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState;
    }

}