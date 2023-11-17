import HomePage from "../components/HomePage/HomePage";
import LoginPage from "../components/Authorization/LoginPage/LoginPage";
import RegistrationPage from "../components/Authorization/RegistrationPage/RegistrationPage";
import ErrorPage from "../components/ErrorPage";

const router = [
  {
    path: "/HomePage",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
  {
    
  }
];



export default router;