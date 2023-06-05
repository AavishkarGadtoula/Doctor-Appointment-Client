import React, { useState, useEffect, useContext } from "react";

 export const UserValue = React.createContext(null);

export const useUser = () => { 
    return useContext(UserValue)
}
export default function UserContext({ children }) {
    const [user, setUser] = useState(null);


  return (
    <UserValue.Provider value={{ user, setUser }}>
      {children}
    </UserValue.Provider>
  );
}
