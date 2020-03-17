//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import CommentSectionContainer from "../CommentSection/CommentSectionContainer.js";
import LikesSection from "./LikeSection";
// import data 
import dummyData from "../../dummy-data.js";

const PostsPage = () => {
  // set up state for your data

  const [myData, setMyData] = useState(dummyData);
  

  function AddPost (props) { //this puppy adds a post
    const {postData} = props; 
    console.log(postData);
    const [postLikes, setPostLikes] = useState(postData.likes);

    return ( //returns a post

      <div className = "posts-container-wrapper post-border">
        <div className = "post-header"> 
          <img className = "post-thumb-wrapper post-thumb" src = {postData.thumbnailUrl} alt = "account thumbnail"/>
          <h2 className = "post-header h2">{postData.username}</h2>
        </div>
        <div className = "post-image-wrapper">
          <img className = "post-image" src = {postData.imageUrl} alt = "post image"/> 
        </div>
        {/* <div className = "like-or-comment">
           <img src = "../src/assets/heart.svg"/> 
        </div> */}
        <LikesSection postLikes = {postLikes} setPostLikes = {setPostLikes}/>
        <CommentSectionContainer postData = {postData} /> 
      </div>
      
    );
  }

  const postsList = myData.map((item) => {
    return <AddPost postData = {item}/>
  })


  return (
    <div className="posts-container-wrapper">
      {postsList}
    </div>
  );
};

export default PostsPage;

