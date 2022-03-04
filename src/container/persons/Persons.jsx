import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addPerson } from '../../redux/actions/persons'
import { nanoid } from 'nanoid'
class Persons extends Component {
    add = () => {
        const { value: name } = this.name;
        const { value: age } = this.age;
        const id = nanoid()
        console.log(name, age, id);
        this.props.add({ name, age, id })
    }
    render() {
        return (
            <div>
                <h2>当前的count值是：{this.props.count}</h2>
                <input type="text" placeholder='请输入姓名' ref={c => this.name = c} />
                <input type="text" placeholder='请输入年龄' ref={c => this.age = c} />
                <button onClick={this.add}>添加</button>
                <hr />
                <ul>
                    {
                        this.props.person.map(item => {
                            return <li key={item.id}>{`姓名: ${item.name}-------年龄:${item.age}`}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
const mapToStateFromProps = state => {
    console.log(state);
    return {
        person: state.person,
        count: state.count
    }
    // personList: state.
}
// const mapToDispatchFromProps = {
//     add: addPerson
// }
export default connect(
    mapToStateFromProps,
    {
        add: addPerson
    }
)(Persons)