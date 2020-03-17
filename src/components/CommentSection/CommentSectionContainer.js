// You will add code to this file
import React, { useState, useEffect } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";



const CommentSection = props => {
  // Add state for the comments
  let { postComments, setPostComments } = props;
  
  let comments = [];
  comments = postComments.map((item) => {
    return <Comment comment = {item}/>
  })
  //COMMENTS WORK HERE

  useEffect(() => { //useeffect is NOT refreshing the dom and is not running when the addcoment function enters
    console.log("useeffect is working!");
    const newArray = postComments.map((item) => {
      return <Comment comment = {item}/>
    });
    setPostComments(postComments.concat(newArray));
    
    console.log("use effect", comments);
  },[])


// FAILED ADD Comment, DOES NOT RENDER
  function addComment(e) { //on hitting enter, push onto post contents and call 
    if (e.keyCode === 13) {
      postComments.push({
        username: "new user",
        text: document.getElementById("test-test").value
      })
     console.log(postComments)
    }
  } //this appends to postComments, but i can't get comment section to rerender.

  function doNothing(e) {

  }

  return ( //actually return the comment section
    
    <div className = "prepend-here">
     {comments}
     
      <CommentInput addComment = {addComment} doNothing = {doNothing}/>
    </div>
  );
};

export default CommentSection;
