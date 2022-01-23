import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { VscAccount } from "react-icons/vsc";
import { FcPlus, FcMinus } from "react-icons/fc";
const TodoList = () => {
  return (
    <Wrapper>
      <CategoryHeader>
        <VscAccount
          style={{ marginRight: "10px" }}
          color="pink"
          size={"30px"}
        />
        <h2>Personal</h2>
        <TodoInput />
        <FcPlus />
      </CategoryHeader>
      <Wrapper2>
        <TodoItem />
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
