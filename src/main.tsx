import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './pages/index.tsx'



// ReactDOM.createRoot(document.getElementById('root')!).render(
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
// )

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    {/* The rest of your app goes here */}
  </BrowserRouter>
);