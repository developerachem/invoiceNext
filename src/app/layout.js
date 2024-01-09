"use client";

import { Provider } from "react-redux";
import Header from "./components/header/header";
import "./globals.css";
import store from "../../store/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#031627" }}>
        <Provider store={store}>
          <Header />
          <div className="h-[100vh] overflow-x-hidden pt-[110px]">
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
