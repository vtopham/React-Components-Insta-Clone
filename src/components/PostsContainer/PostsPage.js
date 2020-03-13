//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
// import dummyData from "..../dummy-data.js";

const dummyData = {
  username: "philzcoffee",
  thumbnailUrl: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s150x150/67248626_346350186304601_6715901285419188224_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=knDeVfZyZmEAX_f8JX8&oh=c04ae5f2798f982b96e7cd7e141aeddd&oe=5E8242C8',
  imageUrl: 'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80',
  likes: 400,
  timestamp: "July 17th 2017, 12:42:40 pm",
  comments: [
      {
          username: "philzcoffee",
          text: "We've got more than just delicious coffees to offer at our shops!"
      },
      {
          username: "biancasaurus",
          text: "Looks delicious!"
      },
      {
          username: "martinseludo",
          text: "Can't wait to try it!"
      }
  ]
}

const PostsPage = () => {
  // set up state for your data

  
  function AddPost (props) {
    const {postData} = props;
  
    return (

      <div className = "posts-container-wrapper">
        <div className = "post-header">
          <img src = {postData.thumbnailUrl} alt = "account thumbnail"></img>
          <h2 className = "post-header h2">{postData.username}</h2>
        </div>
        <div className = "post-image-wrapper">
          <img className = "post-image" src = {postData.imageURL}/> 
        </div>
        <div className = "like-or-comment">
            {/* insert like/comment buttons here */}
        </div>
        <h2>{postData.likes} likes</h2>
          
        {/* ADD COMMENTS HERE */}
      </div>
      
      

    );
  }

  return (
    <div className="posts-container-wrapper">
      <AddPost postData = {dummyData}/>
    </div>
  );
};

export default PostsPage;

