import React from "react";

interface LogContextProps {
  printLog: (message: string) => void;
}

const initialValues: LogContextProps = {
  printLog: (message: string) => {},
};

export const LogContext = React.createContext(initialValues);

export const useLogs = () => {
  return React.useContext(LogContext);
};

export const LogContextProvider = ({ children }: any) => {
  const onPrint = (message: string) => {
    console.log(message);
  };

  const values: LogContextProps = {
    printLog: onPrint,
  };

  if (process.env.NODE_ENV === "production") {
    return <>{children}</>;
  }

  return <LogContext.Provider value={values}>{children}</LogContext.Provider>;
};
