import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { VscAccount } from "react-icons/vsc";
import { FcPlus } from "react-icons/fc";

/*
{
  id: 1;
  title: "cleaning";
  completed: false;
}
*/

const TodoList = ({ name, color, icon }) => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const basURL = `https://api.airtable.com/v0/apphvdxoZpG6Oyy1r/${name}`;

  const getTodos = async () => {
    const res = await fetch(basURL, {
      method: "get",
      headers: {
        Authorization: "Bearer keyABhdNIqisqAn0L",
      },
    });
    const data = await res.json();
    setTodos(data.records);

    console.log(todos);
  };

  useEffect(() => {
    getTodos();
  }, [todo]);

  const addButtonHandler = async () => {
    try {
      await fetch(basURL, {
        method: "POST",
        headers: {
          Authorization: "Bearer keyABhdNIqisqAn0L",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                title: todo,
                completed: false,
              },
            },
          ],
        }),
      });
      setTodo("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Wrapper>
      <CategoryHeader>
        <CategoryItem styled={{ background: color }}>
          <i className={icon} />
        </CategoryItem>
        <h2>{name}</h2>
        <TodoInput value={todo} onChange={(e) => setTodo(e.target.value)} />
        <FcPlus onClick={addButtonHandler} />
      </CategoryHeader>
      <Wrapper2>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            basURL={basURL}
            setTodo={setTodo}
            name={name}
            getTodos={getTodos}
          />
        ))}
      </Wrapper2>
    </Wrapper>
  );
};

export default TodoList;
const Wrapper = styled.div`
  background-color: #20212d;
  width: 400px;
  margin-bottom: 30px;
  border-radius: 20px;
  overflow: hide;
`;
const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #272833;
  padding: 15px 20px;

  h2 {
    flex: 1;
    font-size: 18px;
    font-weight: 600;
  }
`;
const Wrapper2 = styled.div`
  width: 100vw;
`;
const TodoInput = styled.input`
  height: 30px;
  font-size: 18px;
  outline: none;
  border: none;
  background-color: #20212d;
  color: #eee;
  border-radius: 4px;
  padding: 4px 10px;
  margin-right: 4px;
`;
const CategoryItem = styled.div``;
