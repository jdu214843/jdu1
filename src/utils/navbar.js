import Analyze from "../components/Analyze";
import Moderate from "../components/Moderate";
import useId from "../hooks/useId";

export const navbar = [
  {
    id: useId,
    element: <Analyze />,
    title: "Analyze",
    path: "/analyze",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Moderate />,
    title: "Moderate",
    path: "/moderate",
    private: false,
    hidden: false,
  },
];
