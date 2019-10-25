import {RegisterUser} from "./controller/login/register";
import {loginUser} from "./controller/login/login";
import {getInstitucion} from "./controller/instituciones/InstitucionesHandler";
export const AppRoutes = [
  {
      path: "/register",
      method: "post",
      action: RegisterUser
  } ,{
      path: "/login",
      method: "post",
      action: loginUser
  }, {
    path: "/instituciones",
    method: "get",
    action: getInstitucion
  }
];