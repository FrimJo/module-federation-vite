import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppProviders } from "@repo/router";
import router from "./router";
import { RouterProvider } from "@tanstack/react-router";

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>
    </StrictMode>,
  );
}
