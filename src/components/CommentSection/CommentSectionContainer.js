// You will add code to this file
import React, { useState, useEffect } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const { postComments, setPostComments } = props;
  

  /////////////FOR THE COMMENT SUBMISSION...
  // onSubmit 
  function submitComment (e) {
    e.preventDefault();
    let commentText = e.target.children[0].value;
    let newComment = [{
      username: "new user",
      text: commentText
    }];
    // const newArray = postComments.push(newComment);
    // console.log(postComments);
    setPostComments(postComments.concat(newComment));
    
    
  }

  const comment = "";

  function changeComment () {

  }

    /////////////FOR THE COMMENT SUBMISSION...

  //make an array of comments to add

    let allComments = postComments.map((item) => {
      return <Comment comment = {item}/>
    });
  
  

  return (
    
    <div>
     {allComments}
     <p className = "how-recent">2 hours ago</p>
      {/* <CommentInput submitComment = {submitComment} comment = {comment} changeComment = {changeComment}/> */}
      <CommentInput submitComment = {submitComment}/>
    </div>
  );
};

export default CommentSection;


