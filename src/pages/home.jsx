import React from 'react';
import Header from '../components/header/header';
import TweetEditor from '../components/tweet-editor/tweet-editor';
import Tweets from '../components/tweets/tweets';

function Home() {
  return (
    <main className="timeline">
      {/* <h1>Timeline here</h1> */}
      <Header />
      <TweetEditor />
      <Tweets />
    </main>
  );
}

export default Home;
