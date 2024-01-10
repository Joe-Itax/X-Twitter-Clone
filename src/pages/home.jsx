import React from 'react';
import Header from '../components/header/header';
import TweetEditor from '../components/tweet-editor/tweet-editor';
import Tweets from '../components/tweets/tweets';

function Home() {
  return (
    <main className="timeline border-l border-r border-solid border-[#2f3336] grow-0 shrink-0 basis-[800px]">
      <Header />
      <TweetEditor />
      <Tweets />
    </main>
  );
}

export default Home;
