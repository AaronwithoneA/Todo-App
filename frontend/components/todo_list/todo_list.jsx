import React from 'react';

 const TodoList = ({todos}) => {
   console.log(todos);
   return (
     <div>
       <ul>
         {todos.map((todo, i) => (
           <li key={i}> {todo.title} </li>
         ))}
       </ul>
     </div>
   );
 };

export default TodoList;
