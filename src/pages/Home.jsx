import React, { useEffect, useState } from "react";
import { Post } from "../common/components/Post";
import styled from "styled-components";

const PostWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const LoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-shadow: 0 0 6px 1px rgb(0 0 0 / 50%);
  flex: 1 0 33%;
  border-radius: 12px;
  padding: 12px;
  height: 120px;
`;

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = "https://jsonplaceholder.typicode.com/posts";
  const getPosts = async () => {
    setLoading(true);
    await fetch(url)
      .then((data) => data.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <main style={{ padding: "32px" }}>
      <PostWrapper>
        {loading
          ? new Array(16).fill(0).map(() => <LoadingBox />)
          : posts.map((data) => <Post postDetails={data} key={data.id} />)}
      </PostWrapper>
    </main>
  );
};
