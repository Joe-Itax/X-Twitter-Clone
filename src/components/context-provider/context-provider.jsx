import { useState, useEffect } from "react";

import globalContext from "../../contexts/global-context";
import currentUserContext from "../../contexts/current-user-context";

function ContextProvider({ children }) {
  const [datas, setDatas] = useState({ currentUser: {}, tweets: [] });
  const [tweets, setTweets] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const response = await fetch("src/data/initial-data.json");
        const data = await response.json();
        setDatas(data);
        setTweets(data.tweets);
        setCurrentUser(data.currentUser);
      } catch (err) {
        console.error("Erreur lors de la recuperation des donnees: ", err);
      }
    };

    fetchDatas();
  }, []);

  return (
    <>
      <currentUserContext.Provider value={{currentUser, setCurrentUser}}>
        <globalContext.Provider value={{ tweets, setTweets }}>
          {children}
        </globalContext.Provider>
      </currentUserContext.Provider>
    </>
  );
}

export default ContextProvider;
