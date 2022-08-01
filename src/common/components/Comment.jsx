import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CommentBox = styled.div`
  background-color: gray;
  border-radius: 10px;
  padding: 6px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CommentDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Comment = (props) => {
  const { name, id, body } = props.commentDetails;
  return (
    <CommentBox>
      <CommentDetails>
        <div>
          <strong>Name:</strong> {name}
        </div>
        <div>
          <strong>id:</strong>
          {id}
        </div>
      </CommentDetails>
      <div>
        <strong>Comment:</strong>
        <div>{body}</div>
      </div>
    </CommentBox>
  );
};

Comment.propTypes = {
  commentDetails: PropTypes.object,
};
