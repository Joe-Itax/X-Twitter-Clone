import { useState, useEffect } from "react";

import axios from "axios";

import tweetsContext from "../../contexts/tweets-context";
import userContext from "../../contexts/users-context";
import currentUserIdContext from "../../contexts/current-user-context";

function ContextProvider({ children }) {
  const [tweets, setTweets] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUserId, setCurrentUserId] = useState({});
  useEffect(() => {
    const getDatas = async () => {
      try {
        const TweetsResponse = await axios.get(
          "https://twitter-clone-api-c2-joe-itax.onrender.com/tweets"
        );
        const UsersResponse = await axios.get(
          "https://twitter-clone-api-c2-joe-itax.onrender.com/users"
        );
        const currentUserResponse = await axios.get(
          "https://twitter-clone-api-c2-joe-itax.onrender.com/users/loggedInUserId"
        );
        setTweets(TweetsResponse.data.tweets);
        setUsers(UsersResponse.data);
        setCurrentUserId(currentUserResponse.data);
      } catch (err) {
        console.error("Erreur lors de la recuperation des donnees: ", err);
      }
    };

    getDatas();
  }, []);
  // console.log("https://twitter-clone-api-c2-joe-itax.onrender.com/: ");
  // console.log("currentUserId: ", currentUserId);

  return (
    <>
      <currentUserIdContext.Provider
        value={{ currentUserId, setCurrentUserId }}
      >
        <tweetsContext.Provider value={{ tweets, setTweets }}>
          <userContext.Provider value={{ users, setUsers }}>
            {children}
          </userContext.Provider>
        </tweetsContext.Provider>
      </currentUserIdContext.Provider>
    </>
  );
}

export default ContextProvider;
