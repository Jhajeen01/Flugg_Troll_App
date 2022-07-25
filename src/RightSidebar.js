import React from "react";
import "./RightSidebar.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimeline,
  TwitterShareButton,
  TwitterTimelineEmbed,
  TwitterTweetEmbed
} from "react-twitter-embed";
function RightSide() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="Search Twitter Trolls" type="text" />
        <input
          className="dirtInput"
          placeholder="Search the dirt"
          type="text"
        />
      </div>
      <div className="widgets__widgetContainers">
        <h2> Trolls Happening</h2>
        <TwitterTweetEmbed tweetId={"1550855158875033601"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="TrollFootball"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://github.com/Jhajeen01"}
          options={{ text: "created using react!", via: "gaurav" }}
        />
      </div>
    </div>
  );
}

export default RightSide;
