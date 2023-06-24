import React, { ReactElement, createContext, useState } from "react";

type MouseContextType = {
  cursorType: string;
  cursorChangeHandler: (cursorType: string) => void;
}

type ProviderProps = {
  children: JSX.Element | ReactElement | ReactElement[],
}

export const MouseContext = createContext<MouseContextType>({
  cursorType: "",
  cursorChangeHandler: () => {},
});

const MouseContextProvider = ({children}: ProviderProps) => {
  const [cursorType, setCursorType] = useState("");

  const cursorChangeHandler = (cursorType: string) => {
    setCursorType(cursorType);
  };

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;
