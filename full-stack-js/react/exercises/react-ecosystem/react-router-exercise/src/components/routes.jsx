import App from "../App.jsx";
import { ErrorPage } from "./ErrorPage.jsx";
import { Profile } from "./Profile.jsx";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  { path: "profile", element: <Profile /> },
  {
    path: "profile/:name",
    element: <Profile />,
  },
];
