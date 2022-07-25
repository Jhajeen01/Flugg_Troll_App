import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import VerifiedIcon from "@mui/icons-material/Verified";
import AddCommentIcon from "@mui/icons-material/AddComment";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ShareIcon from "@mui/icons-material/Share";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

import "./Post.css";
function Post({ displayName, userName, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar}></Avatar>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              <span className="userName">
                {/* <VerifiedIcon class="verifiedIcon" /> */}@{userName}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="imagee" />
        <div className="post__footer">
          <ThumbUpOffAltIcon className="post__like" />
          <AddCommentIcon className="post__reply" />
          <SaveAltIcon className="post__save" />
          <ShareIcon className="post__share" />
        </div>
      </div>
    </div>
  );
}
export default Post;
