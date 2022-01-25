import React from "react";
import styled from "styled-components";
import {
  BsFillCloudFogFill,
  BsFillCollectionFill,
  BsFillBookFill,
} from "react-icons/bs";

// https://react-icons.github.io/react-icons/icons?name=bs
//icon packs

const Header = ({ sideBardToggle, setSideBarToggle }) => {
  return (
    <Wrapper>
      <HeaderItem onClick={() => setSideBarToggle(!sideBardToggle)}>
        <BsFillBookFill />
      </HeaderItem>
      <HeaderItem>
        <BsFillCloudFogFill />
        <span> Dashboard</span>
      </HeaderItem>
      <HeaderItem>
        <BsFillCollectionFill />
        <span> Collections</span>
      </HeaderItem>
      <Placeholder />
      <HeaderItem>
        <Profile>
          <img
            src="https://lh3.googleusercontent.com/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc=w600"
            alt=""
          />
        </Profile>
      </HeaderItem>
    </Wrapper>
  );
};

export default Header;
const HeaderItem = styled.div`
  color: #eee;
  padding: 10px 16px;
  border-radius: 4px;

  span {
    margin-left: 10px;
    font-weight: 500;
  }
  &:hover {
    background-color: #18181f;
    transition: 0.3s;
    cursor: pointer;
  }
`;
const Wrapper = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  padding: 0 20px;
  background-color: #20212d;
  -webkit-box-shadow: 0px 4px 15px 0px #121212;
  position: sticky;
  top: 0;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 30px;
    border-radius: 50%;
  }
`;
const Placeholder = styled.div`
  flex: 1;
`;
