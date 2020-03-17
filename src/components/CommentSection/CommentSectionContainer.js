// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const { postData } = props;


  const postComments = postData.comments.map((item) => {
    return <Comment comment = {item}/>
  });

  // const now = new Date();
  // const postDate = new Date(postData.timestamp);
  // console.log(now);
  // console.log(postDate);
  // // const timeDiff = now - postData.timestamp; 
  // // console.log(timeDiff);

  return (
    
    <div>
     {postComments}
     <p className = "how-recent">2 hours ago</p>
      <CommentInput />
    </div>
  );
};

export default CommentSection;
