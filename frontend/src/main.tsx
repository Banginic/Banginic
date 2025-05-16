
import ReactDOM from "react-dom/client";
import { AppProvider, WorkProvider } from "./context/expContext";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./my_css.css";
import "./index.css";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppProvider>
      <WorkProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </WorkProvider>
    </AppProvider>
  </BrowserRouter>
);
