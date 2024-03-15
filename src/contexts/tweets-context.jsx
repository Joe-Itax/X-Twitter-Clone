import { createContext } from "react";

const tweetsContext = createContext({
  tweets: [],
  setTweets: () => {},
});

export default tweetsContext;
