import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage"
import Layout from "./pages/Layout";
import LifePage from "./pages/LifePage";
import SkyIsland from "./pages/SkyIsland";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'project', element: <ProjectPage />},
      { path: 'life', element: <LifePage />},
      { path: 'skyisland', element: <SkyIsland />},
      // { path: 'about-me', element: <AboutMePage />},
    ]
  }
]);

export default router;
