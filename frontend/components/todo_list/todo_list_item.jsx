import React from 'react';

class TodoListItem extends React.Component {

  constructor (props){
      super(props);
  }

  toggleDone (todo) {
    return () => {
    console.log("hello");
    todo.done = !todo.done;
    this.props.receiveTodo(todo);
    };
  }

  render (){
    return (
      <li>
        {this.props.todo.title}
        <button
         className="delete-button"
         onClick={this.props.removeTodo(this.props.todo)}>Delete Todo</button>
         <button
          className={ this.props.todo.done ? "done" : "undone" }
          onClick={this.toggleDone(this.props.todo)}>{this.props.todo.done ? "Undo" : "Done"}</button>
      </li>
      );
  }



}

export default TodoListItem;
