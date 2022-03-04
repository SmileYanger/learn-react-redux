
import reducer from './reducers/index'
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools} from 'redux-devtools-extension'
//thunk的作用是允许store处理异步函数
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
