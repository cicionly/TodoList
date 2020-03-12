import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './Todo';
import Model from './TodoModel';

let model = new Model();
function render(){
    ReactDOM.render(<Todo model={model}/>, document.getElementById('root'));
}
model.subscribe(render);
render();