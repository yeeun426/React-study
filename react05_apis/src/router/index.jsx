import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import WeatherPage from "../weather/WeatherPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>에러</div>,
    children: [
      {
        path: "/weather",
        element: <WeatherPage />,
      },
    ],
  },
]);
