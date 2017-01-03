import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import allTodos from './reducers/selectors';
import {receiveTodos, receiveTodo} from './actions/todo_actions';
import Root from './components/root';



document.addEventListener("DOMContentLoaded", () => {

  const store = configureStore();
  window.store = store;
  window.selectors = allTodos;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;

    ReactDOM.render(
      <Root store={store}/>,
      document.getElementById('root')
    );
});
