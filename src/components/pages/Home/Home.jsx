import React from "react";
import TodoItem from "./Item/TodoItem";
import { useState } from "react";
import CreateTodoTask from "./create-todo-task/CreateTodoTask";
const data = [
  {
    _id: "1",
    title: "Finish essay",
    isCompleted: "false",
  },
  {
    _id: "2",
    title: "Finish book",
    isCompleted: "false",
  },
  {
    _id: "3",
    title: "Finish training",
    isCompleted: "false",
  },
];
const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = id => {
    const copy = [...todos];
    const current = copy.find(t => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = id => {
    setTodos([...todos].filter(t => t._id != id));
  };

  return (
    <div className='py-10 bg-zinc-600 h-screen text-white w-4/5 mx-auto'>
      <h1 className='text-5xl font-bold text-center mb-10'>todos</h1>
      {todos.map(todo => (
        <TodoItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <CreateTodoTask setTodos={setTodos} />
    </div>
  );
};

export default Home;
