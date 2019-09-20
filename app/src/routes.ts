import {getAllUsers} from "./controller/getAllusers";
import {RegisterUser} from "./controller/login/register";
import {loginUser} from "./controller/login/login";
export const AppRoutes = [
  {
      path:"/users",
      method: "get",
      action: getAllUsers
  },{
      path: "/register",
      method: "post",
      action: RegisterUser
  } ,{
      path: "/login",
      method: "post",
      action: loginUser
  }
];