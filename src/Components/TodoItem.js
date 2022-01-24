import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { BiBadge, BiBadgeCheck } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

import TodoList from "./TodoList";

//tick :AiOutlineCheck  ,cross:AiOutlineClose  in import { IconName } from "react-icons/ai";
//left check box: empty - BiBadge ,filled -BiBadgeCheck  in import { IconName } from "react-icons/bi";
//delete :  MdDelete in import { IconName } from "react-icons/md";
//plus icon : FcPlus, minus:FcMinus in import { IconName } from "react-icons/fc";

const TodoItem = ({ todo, todos, setTodos }) => {
  const [editedTodo, setEditedTodo] = useState(todo.title);

  useEffect(() => {
    setEditedTodo(todo.title);
  }, [todo]);

  const saveTodo = () => {
    const currentTodoID = todo.id;
    setTodos(
      todos.map((todo) =>
        todo.id === currentTodoID ? { ...todo, title: editedTodo } : todo
      )
    );
    console.log(todos);
  };

  const deleteHandler = () => {
    console.log(todo.id, todo.title);
    const currentTodoID = todo.id;
    setTodos(todos.filter((todo) => todo.id != currentTodoID));
  };

  const completeTodo = () => {
    const currentTodoID = todo.id;
    setTodos(
      todos.map((todo) =>
        todo.id === currentTodoID
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };
  return (
    <>
      <TodoListItem>
        <BiBadge
          color="white"
          cursor={"pointer"}
          size={"25px"}
          style={{ marginRight: "5px" }}
          onClick={completeTodo}
        />
        <input
          value={editedTodo}
          onChange={(e) => setEditedTodo(e.target.value)}
          style={{ textDecoration: todo.completed ? `line-through` : `none` }}
        />

        {todo.title != editedTodo && (
          <AiOutlineCheck
            color="green"
            cursor={"pointer"}
            style={{ padding: "10px 16px", marginRight: "-17px" }}
            onClick={saveTodo}
          />
        )}
        <MdDelete
          style={{
            padding: "10px 16px",
            marginLeft: "15px",
            borderRadius: "4px",
            marginRight: "-12px",
            color: "red",
          }}
          cursor={"pointer"}
          onClick={deleteHandler}
        />
      </TodoListItem>
    </>
  );
};

export default TodoItem;
const TodoListItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  padding: 15px 20px;
  transition: 0.3s;
  z-index: 999;

  input {
    font-size: 22px;
    outline: none;
    background: transparent;
    border: none;
    color: #eee;
  }
`;
