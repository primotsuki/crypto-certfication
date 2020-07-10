import {RegisterUser} from "./controller/login/register";
import {loginUser} from "./controller/login/login";
import {getInstitucion} from "./controller/instituciones/InstitucionesHandler";
import {getTipoSolicitud} from "./controller/tipo_solicitudes/getTipoSolicitudHandler";
import {CreateSolicitud} from "./controller/solicitudes/createSolicitudHandler";
import {getUsuarioSolicitud} from "./controller/solicitudes/getUsuarioSolcitud";
import {getSolicitudInstitucion} from './controller/solicitudes/getInstitucionesSolicitud';
import {getUsuarioData} from './controller/persona/getUserHandler';
import {CreateCertificado} from "./controller/certificado/CreateCertificado";
import {UpdateCertificado} from "./controller/certificado/UpdateCertificado";
import {getCertificados} from "./controller/certificado/MisCertificados";
import { getCertificadosInstitucion } from "./controller/certificado/certificadoInstitucion";
import { validarCertificado } from "./controller/certificado/ValidarCertificado";

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
  }, {
    path: "/institucion/:institucion_id/solicitudes/:estado_id/",
    method: "get",
    action: getSolicitudInstitucion
  }, {
    path: "/usuario/:user_id",
    method: "get",
    action: getUsuarioData
  }, {
    path: "/certificado/create",
    method: "post",
    action: CreateCertificado
  }, {
    path: "/certificado/update",
    method: "post",
    action: UpdateCertificado
  }, {
    path: "/certificados/:usuario_id",
    method: "get",
    action: getCertificados
  },{
    path:"/certificados_institucion/:institucion_id",
    method: "get",
    action: getCertificadosInstitucion
  },{
    path: "/validar_certificado/:hash",
    method: "get",
    action: validarCertificado
  }
];