import React from "react";
import Header from "../components/header/header";
import TweetEditor from "../components/tweet-editor/tweet-editor";
import Tweets from "../components/tweets/tweets";

function Home() {
  return (
    <>
      <Header />
      <TweetEditor />
      <Tweets />
    </>
  );
}

export default Home;
