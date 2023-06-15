// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import SignIn from "layouts/authentication/sign-in";
import Registro from "layouts/registro-certi";
import Search from "layouts/search";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Búsqueda",
    key: "search",
    icon: <Icon fontSize="small">search</Icon>,
    route: "/search",
    component: <Search/>,
  },
  {
    type: "collapse",
    name: "Registro",
    key: "registro",
    icon: <Icon fontSize="small">edit</Icon>,
    route: "/registro",
    component: <Registro />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
];

export default routes;
