import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import LifePage from "./pages/LifePage";
import Contact from "./pages/ContactPage";
import SkyIsland from "./pages/SkyIsland";
import ProjectWithBackGround from './components/ProjectWithBackGround';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <ProjectWithBackGround />},
      { path: 'life', element: <LifePage />},
      { path: 'skyisland', element: <SkyIsland />},
      { path: 'contact', element: <Contact />},
    ]
  }
]);

export default router;
