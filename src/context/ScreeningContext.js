import React from "react";

const ScreeningContext = React.createContext({
  screeningData: {},
  setScreeningData: () => {},
});

export { ScreeningContext };
