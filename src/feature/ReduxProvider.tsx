"use client";

import 'react-toastify/dist/ReactToastify.css';  
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { ToastContainer } from "react-toastify";


export interface IReduxProvider {
  children: ReactNode;
}

const ReduxProvider = ({ children }: IReduxProvider) => {
  return (
    <Provider store={store}>
      {children}
      <ToastContainer />
    </Provider>
  );
};

export default ReduxProvider;
