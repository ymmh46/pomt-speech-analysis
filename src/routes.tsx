import type { RouteObject } from "react-router-dom";
import Start from "./pages/start"
import Analyze from "./pages/analyze"
import Result from "./pages/result"
import NotFound from "./pages/notFound"

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Start />,
    children: [],
  },
  {
    path: "/analyze",
    element: <Analyze />,
    children: [],
  },
  {
    path: "/result",
    element: <Result />,
    children: [],
  },
  {
    path: "*",
    element: <NotFound />,
    children: [],
  },
]
