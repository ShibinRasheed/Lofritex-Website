import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RootLayout from "./RootLayout.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateNote from "./CreateNote.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<h1>404</h1>,
    children: [
      {
        path: "/new",
        element: <CreateNote />,
      },
    ]
  },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
);
