import React, { useState } from "react";
import { useUserState } from "../context/UserContext";

const Second = () => {
  const {
    user: { data: userData, loggedIn: loggedIn },
  } = useUserState();

  return (
    <>
      Second First에서 context API로 저장한 유저정보에서 이름 가지고 오는 곳
      <div>{userData.name}</div>
    </>
  );
};

export default Second;
