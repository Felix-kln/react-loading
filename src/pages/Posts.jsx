import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Comment } from "../common/components/Comment";
import { LoadingComment } from "../common/components/LoadingComment";
import styled from "styled-components";

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Main = styled.main`
  padding: 16px;
`;

const Button = styled.button`
  border: 1px solid rgb(0 0 0 / 50%);
  padding: 4px;
  border-radius: 8px;
  cursor: pointer;
`;

export const Posts = () => {
  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const getComments = async () => {
    setLoading(true);
    await fetch(url)
      .then((data) => data.json())
      .then((data) => setComments(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const toHome = () => nav("/home");

  return (
    <Main>
      <div style={{ marginBottom: "16px" }}>
        <Button onClick={toHome}>&#8592; back</Button>
      </div>
      <CommentBox>
        {loading
          ? new Array(5)
              .fill(0)
              .map((item, index) => <LoadingComment key={index} />)
          : comments.map((data) => (
              <Comment commentDetails={data} key={data.id} />
            ))}
      </CommentBox>
    </Main>
  );
};
