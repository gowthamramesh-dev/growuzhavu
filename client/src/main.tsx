import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./i18n.ts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Suspense
        fallback={
          <div className="w-full h-dvh z-40 flex items-center justify-center text-white">
            <div
              className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-500"
              style={{ animationDuration: "6s" }}
            ></div>
          </div>
        }
      >
        <App />
      </Suspense>
    </StrictMode>
  </BrowserRouter>
);
