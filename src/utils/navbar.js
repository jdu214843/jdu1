import useId from "../hooks/useId";
import HomePage from "../pages/Home";
import Properties from "../pages/Properties";

export const navbar = [
  {
    id: useId,
    element: <HomePage />,
    title: "Analyze",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Properties />,
    title: "Moderate",
    path: "/properties",
    private: false,
    hidden: false,
  },
];
