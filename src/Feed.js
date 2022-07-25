// import React, { useState, useEffect } from "react";
import "./Feed.css";
import Tweetbox from "./Tweetbox";
// import "./firebase";
// import db from "./firebase";
import Post from "./Post";
function Feed() {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) =>
  //     setPosts(snapshot.docs.map((doc) => doc.data()))
  //   );
  // });
  return (
    <div className="feed">
      {/*home */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <Tweetbox />

      <Post
        // displayName, userName, verified, text, image, avatar
        displayName="Gaurav Jha"
        userName="jhajeen01"
        verified={true}
        text="let the trolling begin!"
        avatar="https://drive.google.com/uc?export=view&id=1LUxHzacFb2IlZSTmgxrrOK04Sz7uTKQggQ"
        image="https://media.giphy.com/media/Ze4BXdrjDjygM9Piq0/giphy.gif"
      />

      <Post
        // displayName, userName, verified, text, image, avatar
        displayName="Gaurav Jha"
        userName="jhajeen01"
        verified={true}
        text="let the trolling begin!"
        avatar="https://drive.google.com/uc?export=view&id=1LUxHzacFb2IlZSTmgxrrOK04Sz7uTKQggQ"
        image="https://media.giphy.com/media/Ze4BXdrjDjygM9Piq0/giphy.gif"
      />

      <Post
        // displayName, userName, verified, text, image, avatar
        displayName="Gaurav Jha"
        userName="jhajeen01"
        verified={true}
        text="let the trolling begin!"
        avatar="https://drive.google.com/uc?export=view&id=1LUxHzacFb2IlZSTmgxrrOK04Sz7uTKQggQ"
        image="https://media.giphy.com/media/Ze4BXdrjDjygM9Piq0/giphy.gif"
      />
      <Post
        // displayName, userName, verified, text, image, avatar
        displayName="Gaurav Jha"
        userName="jhajeen01"
        verified={true}
        text="let the trolling begin!"
        avatar="https://drive.google.com/uc?export=view&id=1LUxHzacFb2IlZSTmgxrrOK04Sz7uTKQggQ"
        image="https://media.giphy.com/media/Ze4BXdrjDjygM9Piq0/giphy.gif"
      />

      {/*tweetbox */}
      {/* posts */}
      {/* posts */}
      {/* posts */}
      {/* posts */}
      {/* posts */}
      {/* posts */}
    </div>
  );
}

export default Feed;
