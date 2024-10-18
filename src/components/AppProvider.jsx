import { createContext, useState } from "react";
import PropTypes from "prop-types";
import Image from "../assets/Image.png";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [togglenav, setTogglenav] = useState(true);

  return (
    <AppContext.Provider value={{ togglenav, setTogglenav, Image }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};
