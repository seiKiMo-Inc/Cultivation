import React from "react";
import { createRoot } from "react-dom/client";

import App from "./ui/App";

(async() => {
    render(); // Render the application.
})();

/**
 * Renders the application.
 */
function render() {
    // Render the application.
    const root = document.getElementById("root");
    createRoot(root!).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
