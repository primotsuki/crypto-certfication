import {RegisterUser} from "./controller/login/register";
import {loginUser} from "./controller/login/login";
export const AppRoutes = [
  {
      path: "/register",
      method: "post",
      action: RegisterUser
  } ,{
      path: "/login",
      method: "post",
      action: loginUser
  }
];