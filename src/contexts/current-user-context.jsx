import { createContext } from "react";

const currentUserIdContext = createContext({
  currentUserId: {},
  setCurrentUserId: () => {},
});

export default currentUserIdContext;
