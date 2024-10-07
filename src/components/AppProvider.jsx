import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [togglenav, setTogglenav] = useState(true);

  return (
    <AppContext.Provider value={{ togglenav, setTogglenav }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};
