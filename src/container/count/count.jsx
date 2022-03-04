import React from 'react';
//react-redux 用于链接UI组件何redux
import { connect } from 'react-redux'
import {
    incrementAction,
    decrementAction,
    incrementActionAsync
} from '../../redux/actions/count'
class Count extends React.Component {
    state = {  }
    //加法
    increment = () => {
        const { value } = this.inputValue
        this.props.jia(value*1)
    }
     //减法
    decrement = () => {
        const { value } = this.inputValue
       this.props.jian(value*1)
    }
    // 异步加
    incrementAsync = () => {
        const { value } = this.inputValue
       this.props.jiaAsync(value*1, 1000)
    }
    render() {
        return (
            <div className='box'>
                <h2>当前的值是：{this.props.count}</h2>
                <select name="" id="" ref = {(c) =>{this.inputValue = c}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
                &nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
               
            </div>
        );
    }
}

//使用connect来创建并暴露一个count容器组件
export default connect( 
    state =>({
        count: state.count
    }),
    {
        jia:incrementAction,
        jian:decrementAction,
        jiaAsync:incrementActionAsync
    }
)(Count)