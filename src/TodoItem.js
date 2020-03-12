import React from 'react';

class TodoItem extends React.Component {
    delTodo = () => {
        this.props.delTodo(this.props.todo.id);
    }
    render() {
        return <li className="list-group-item">
            <div className="row">
                <div className="col-sm-2">
                    <input checked={this.props.todo.completed} onChange={() => this.props.togger(this.props.todo.id)} type="checkbox" />
                </div>
                <div className="col-sm-8" style={{ textDecoration: (!this.props.todo.completed ? '' : 'line-through') }}>
                    {this.props.todo.content}
                </div>
                <div className="col-sm-2">
                    <button onClick={this.delTodo} className="btn btn-danger btn-xs">删除</button>
                </div>
            </div>
        </li>
    }
}
export default TodoItem;