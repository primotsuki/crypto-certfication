import {RegisterUser} from "./controller/login/register";
import {loginUser} from "./controller/login/login";
import {getInstitucion} from "./controller/instituciones/InstitucionesHandler";
import {getTipoSolicitud} from "./controller/tipo_solicitudes/getTipoSolicitudHandler";
import {CreateSolicitud} from "./controller/solicitudes/createSolicitudHandler";
import {getUsuarioSolicitud} from "./controller/solicitudes/getUsuarioSolcitud";
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
  }, {
    path: "/tipo_solicitudes",
    method: "get",
    action: getTipoSolicitud
  },{
    path: "/solicitud",
    method: "post",
    action: CreateSolicitud
  },{
    path: "/solicitudes/:id",
    method: "get",
    action: getUsuarioSolicitud
  }
];