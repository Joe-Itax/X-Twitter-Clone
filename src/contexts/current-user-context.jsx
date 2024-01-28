import { createContext } from "react";

const currentUserContext = createContext({
      currentUser: {},
    setCurrentUser: () => { }
  });

export default currentUserContext;
