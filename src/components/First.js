import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUserDispatch } from "../context/UserContext";
import Header from "./Header";

const First = () => {
  const userDispatch = useUserDispatch();

  const getInfo = () => {
    userDispatch({ type: "UPDATE_USER_DATA", data: { name: "Austin" } });
  };

  return (
    <>
      <div>First컴포넌트</div>
      <div>버튼 눌러서 유저정보 dispatch 시킬 컴포넌트</div>
      <button onClick={() => getInfo()}>정보 받기</button>
    </>
  );
};
export default First;
