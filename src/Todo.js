import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter';
import FilterTypes from "./FilterTypes";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FilterType: FilterTypes.ALL
        }
    }

    filterTodo = (FilterType) => {
        this.setState({FilterType});
        // if(type===FilterTypes.TODO){
        //     this.setState({ FilterType: type});
        // } else if (type===FilterTypes.COMPLETED){
        //     this.setState({ FilterType: type});
        // }
        // switch (type) {
        //     case FilterTypes.TODO:
        //         this.setState({ FilterType: FilterTypes.TODO})
        //         break;
        //     case FilterTypes.COMPLETED:
        //         this.setState({ FilterType: FilterTypes.COMPLETED})
        //         break;
        //     default:
        //         this.setState({ FilterType: FilterTypes.ALL })
        // }                
        // console.log(this.state.FilterType);
    }

    render() {
        let todos = this.props.model.todos;
        let Todocount = todos.reduce((count, todo) => {
            return count + (todo.completed ? 0 : 1);
        }, 0);
        let completed = todos.length - Todocount;
        let showtodos = todos.filter((todo) => {
            switch (this.state.FilterType) {
                case FilterTypes.TODO:
                    if (!todo.completed) {
                        return todo;
                    }
                    break;
                case FilterTypes.COMPLETED:
                    if (todo.completed) {
                        return todo;
                    }
                    break;
                default:
                    return todo;
            }
        });

        let main = (
            <ul className="list-group">
                {todos.length > 0 ? <li className="list-group-item">
                    <input type="checkbox" checked={completed === todos.length} onChange={this.props.model.toggerAll} />{completed === todos.length ? "全部取消" : "全部选中"}
                </li> : null}
                {
                    showtodos.map((todo, index) => {
                        return <TodoItem key={index} todo={todo} delTodo={this.props.model.delTodo} togger={this.props.model.togger} />
                    })
                }
            </ul>
        )
        return <div className="container">
            <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <TodoHeader addTodo={this.props.model.addTodo} />
                        </div>
                        <div className="panel-body">
                            {main}
                        </div>
                        <div className="panel-footer">
                            <TodoFooter completed={completed} Todocount={Todocount} FilterTypes={FilterTypes} FilterType={this.state.FilterType} filterTodo={this.filterTodo} delAllCompleted={this.props.model.delAllCompleted}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Todo;