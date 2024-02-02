import { useState, useEffect } from "react";

import axios from "axios";

import globalContext from "../../contexts/global-context";
import currentUserContext from "../../contexts/current-user-context";

function ContextProvider({ children }) {
  const [tweets, setTweets] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const getDatas = async () => {
      try {
        const response = await axios.get("https://65b90362b71048505a89fa29.mockapi.io/data");
        const data = response.data;
        setTweets(data[1].tweets);
        setCurrentUser(data[0].currentUser);
        // console.log("data: ", data)
      } catch (err) {
        console.error("Erreur lors de la recuperation des donnees: ", err);
      }
    };

    getDatas();
  }, []);
  // console.log("tweets: ", tweets)
  // console.log("currentUser: ", currentUser)

  return (
    <>
      <currentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <globalContext.Provider value={{ tweets, setTweets }}>
          {children}
        </globalContext.Provider>
      </currentUserContext.Provider>
    </>
  );
}

export default ContextProvider;
