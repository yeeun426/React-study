import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Default from "./layout/Default";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import NotFound from "./pages/NotFound";
import MainSub1Page from "./pages/MainSub1Page";

const router = createBrowserRouter([
  {
    element: <Default />,
    children: [
      {
        path: "/",
        element: <MainPage />,
        children: [{ path: "", element: <MainSub1Page /> }],
      },
      { path: "/about", element: <AboutPage /> },
      { path: "/blog", element: <MainPage /> },
      { path: "/shop", element: <ShopPage /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

// router에 관련된거를 한곳에 모아두는게 좋음
