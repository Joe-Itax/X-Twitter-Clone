import { createContext } from "react";

const userContext = createContext({
  users: [],
  setUsers: () => {},
});

export default userContext;
