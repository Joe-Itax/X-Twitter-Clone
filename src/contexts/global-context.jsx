import { createContext } from "react";

const globalContext = createContext({
  tweets: [],
  setTweets: () => { }
});

export default globalContext;
