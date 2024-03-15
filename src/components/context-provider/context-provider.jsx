import { useState, useEffect } from "react";

import axios from "axios";

import tweetsContext from "../../contexts/tweets-context";
import userContext from "../../contexts/users-context";
import currentUserContext from "../../contexts/current-user-context";

function ContextProvider({ children }) {
  const [tweets, setTweets] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const getDatas = async () => {
      try {
        const TweetsResponse = await axios.get(
          "https://twitter-clone-api-c2-joe-itax.onrender.com/tweets"
        );
        const UsersResponse = await axios.get("http://localhost:3000/users");
        setTweets(TweetsResponse.data.tweets);
        setUsers(UsersResponse.data);
        setCurrentUser(UsersResponse.data[UsersResponse.data.length - 1]);
      } catch (err) {
        console.error("Erreur lors de la recuperation des donnees: ", err);
      }
    };

    getDatas();
  }, []);
  // console.log("currentUser: ", currentUser)

  return (
    <>
      <currentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <tweetsContext.Provider value={{ tweets, setTweets }}>
          <userContext.Provider value={{ users, setUsers }}>
            {children}
          </userContext.Provider>
        </tweetsContext.Provider>
      </currentUserContext.Provider>
    </>
  );
}

export default ContextProvider;
