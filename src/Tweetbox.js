import React from "react";
import "./tweetBox.css";
import { Avatar, Button } from "@material-ui/core";
function Tweetbox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://drive.google.com/uc?export=view&id=1LUxHzacFb2IlZSTmgxrrOK04Sz7uTKQggQ"></Avatar>
          <input placeholder="What's around your world" type="text"></input>
        </div>
        <Button className="tweetButton">Say Troll</Button>
      </form>
    </div>
  );
}

export default Tweetbox;
