import React, { createRoot } from "react-dom/client";
import "./index.css";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorFallback from "./components/ErrorFallback";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./my_css.css";
import AppProvider from "./context/AppProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <ErrorBoundary fallback={<ErrorFallback />}>
    <BrowserRouter>
      <AppProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </AppProvider>
    </BrowserRouter>
  </ErrorBoundary>
);
