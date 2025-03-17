import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./navbar.tsx";
import Home from "./home.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <main>
      <Home />
    </main>
  </StrictMode>
);
