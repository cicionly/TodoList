import React from 'react';

class TodoFooter extends React.Component {
    render() {
        return <div className="row">
            <div className="col-sm-4">
                <a href="#">
                    你还有 <span className="badge"> {this.props.Todocount}</span>件代办事项
            </a>
            </div>
            <div className="col-sm-4">
                <button className={"btn btn-xs "+(this.props.FilterType===this.props.FilterTypes.ALL?"btn-primary":"btn-default")} onClick={()=>{this.props.filterTodo(this.props.FilterTypes.ALL)}}>全部</button>
                <button style={{ marginLeft: "5px" }} className={"btn btn-xs "+(this.props.FilterType===this.props.FilterTypes.TODO?"btn-primary":"btn-default")} onClick={()=>{this.props.filterTodo(this.props.FilterTypes.TODO)}}>未完成</button>
                <button style={{ marginLeft: "5px" }} className={"btn btn-xs "+(this.props.FilterType===this.props.FilterTypes.COMPLETED?"btn-primary":"btn-default")} onClick={()=>{this.props.filterTodo(this.props.FilterTypes.COMPLETED)}}>已完成</button>
            </div>
            <div className="col-sm-4">
                {this.props.completed===0?null:<button className="btn btn-danger btn-xs pull-right" onClick={this.props.delAllCompleted}>删除已完成的</button>}
            </div>
        </div>
    }
}
export default TodoFooter;