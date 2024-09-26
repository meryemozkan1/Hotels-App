import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// queryCLİENT CLASSINDAN ÖRNEK AL
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Provide ile app bileşenin kapsadık */}
    <QueryClientProvider client={queryClient}>
      <App />
      {/* devtolls bileşeni (ekranın sağ altına gelir) */}
      <ReactQueryDevtools initialIsOpen={false} />
      {/* Bildirim bileşeni */}
      <ToastContainer />
    </QueryClientProvider>
  </React.StrictMode>
);
