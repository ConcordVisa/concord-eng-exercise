// App entry point — mounts <App /> and basically never changes.
// The dashboard you're here to work on is in app.tsx;
// your princess isn't in this castle (unless you want it to be).
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app";

// biome-ignore lint/style/noNonNullAssertion: root element is guaranteed to exist in index.html
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
