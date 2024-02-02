import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/header";
import TweetEditor from "../components/tweet-editor/tweet-editor";
import Tweets from "../components/tweets/tweets";


import currentUserContext from "../contexts/current-user-context";

function Home() {
  const { currentUser } = useContext(currentUserContext);

  const navigate = useNavigate();


  useEffect(() => {
    if (!currentUser.isLogin) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Header />
      <TweetEditor />
      <Tweets />
    </>
  );
}

export default Home;
