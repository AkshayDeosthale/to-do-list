import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import styled from "styled-components";
import { FaAccessibleIcon, FaAffiliatetheme, FaAdn } from "react-icons/fa";
import TodoItem from "./Components/TodoItem";
import TodoList from "./Components/TodoList";
import { VscAccount } from "react-icons/vsc";

function App() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <MainContent style={{ width: "100vw" }}>
          <TodoContent>
            <Title>DASHBOARD</Title>
            <Greeting>Good morning,Akshay</Greeting>

            <TodoList />
          </TodoContent>
        </MainContent>
      </Main>
    </Wrapper>
  );
}
// #18181f
export default App;
const Wrapper = styled.div`
  background-color: #18181f;
  min-height: 100vh;
  overflow: hidden;
  color: #eee;
  width: 100vw;
`;
const Main = styled.div`
  display: flex;
`;
const TodoContent = styled.div`
  max-width: 100px;
  width: 100%;
`;
const Title = styled.div`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 700;
`;
const Greeting = styled.div`
  margin-bottom: 30px;
  font-size: 36px;
  font-weight: 800;
`;
const MainContent = styled.div`
  display: flex;
  justify-content: center;
  transition: 0.3s;
`;
