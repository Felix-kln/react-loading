import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-shadow: 0 0 6px 1px rgb(0 0 0 / 50%);
  flex: 1 0 33%;
  border-radius: 12px;
  padding: 12px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const Post = (props) => {
  const nav = useNavigate();
  const { title, body, id } = props.postDetails;
  const test = () => nav(`/post/${id}`);
  return (
    <PostBox onClick={test}>
      <div>{title}</div>
      <div style={{ height: "1px", backgroundColor: "lightgray" }}></div>
      <div>{body}</div>
    </PostBox>
  );
};

Post.propTypes = {
  postDetails: PropTypes.object,
};
