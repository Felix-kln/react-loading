import React from "react";
import styled from "styled-components";

const Loader = styled.div`
  display: flex;
  flex-direction: column;
  background-color: gray;
  height: 100px;
  border-radius: 10px;
`;

export const LoadingComment = () => {
  return <Loader></Loader>;
};
