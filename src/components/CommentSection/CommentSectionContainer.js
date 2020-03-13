// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const { postData } = props;

  console.log(postData);

  const postComments = postData.comments.map((item) => {
    return <Comment comment = {item}/>
  });

  return (
    
    <div>
     {/* <Comment comment = {postData.comments[0]}/> */}
     {postComments}
     
      <CommentInput />
    </div>
  );
};

export default CommentSection;
