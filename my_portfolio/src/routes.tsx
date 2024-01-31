import { createBrowserRouter } from "react-router-dom";
import ProjectWithBackGround from "./components/ProjectWithBackGround";
import Contact from "./pages/ContactPage";
import Layout from "./pages/Layout";
import LifePage from "./pages/LifePage";
import Main from "./pages/Main";
import SkyIsland from "./pages/SkyIsland";
import Message from "./pages/ContactMessage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Main /> },
      { path: "projects", element: <ProjectWithBackGround /> },
      { path: "life", element: <LifePage /> },
      { path: "skyisland", element: <SkyIsland /> },
      { path: "contact", element: <Contact /> },
      { path: "message", element: <Message />}
    ],
  },
]);

export default router;
