import globalContext from "../../contexts/global-context";
import TweetData from "../../utils/tweet-data";

function ContextProvider({ children }) {
  const tweetDatas = TweetData.getTweets();
  return (
    <globalContext.Provider value={tweetDatas}>
      {children}
    </globalContext.Provider>
  );
}

export default ContextProvider;
