/**
 * 该文件专门生成action对象
 */
//同步action， 就是指action的值为Object类型的一版对象
import {INCREMNT, DECREMENT} from '../constants/count'
import store from '../store'
export const incrementAction = data => ({
    type:INCREMNT,
    data
})
export const decrementAction = data =>({
    type:DECREMENT,
    data
})
//异步action, 就是指action的值为函数
export const incrementActionAsync = (data, time ) => {
    return () => {
        setTimeout(() => {
            store.dispatch(incrementAction(data))
        },time)
    }
}