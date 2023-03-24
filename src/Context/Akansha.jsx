import React, { useContext, useState } from "react";
export const AkanshaContext = React.createContext();

export const AkanshaProvider = ({children}) => {
  const [open, setOpen] = useState(false);

  return (
    <AkanshaContext.Provider
    value={{
        open,setOpen
    }}>
        {children}
    </AkanshaContext.Provider>
  );
};

export default AkanshaProvider;
