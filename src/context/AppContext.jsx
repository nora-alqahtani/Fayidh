// Placeholder for shared app state. Coordinate changes across team members.
import { createContext, useContext } from "react";
const AppContext = createContext({});
export const useApp = () => useContext(AppContext);
export function AppProvider({ children }) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}
