import React from 'react';

class TodoHeader extends React.Component {
    addTodo = (event) => {
        if (event.keyCode === 13 && event.target.value !== null) {
            let content = event.target.value;
            this.props.addTodo({ content });
            event.target.value = null;
        }
    }

    render() {
        return <input autoFocus={true} onKeyDown={this.addTodo} className="form-control" type="text" />
    }
}
export default TodoHeader;