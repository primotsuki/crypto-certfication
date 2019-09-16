import {getAllUsers} from "./controller/getAllusers";

export const AppRoutes = [
  {
      path:"/users",
      method: "get",
      action: getAllUsers
  }  
];