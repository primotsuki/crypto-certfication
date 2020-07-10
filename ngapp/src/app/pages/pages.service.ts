import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {BehaviorSubject, observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(
    private http: HttpClient
  ) { }

  public getInstituciones() {
    return this.http.get<any>(`${environment.apiUrl}/instituciones`);
  }
  public getTipoSolicitud() {
    return this.http.get<any>(`${environment.apiUrl}/tipo_solicitudes`);
  }
  public createSolicitud(solicitud: any) {
    return this.http.post<any>(`${environment.apiUrl}/solicitud`, solicitud);
  }
  public getSolicitudesUsuario(id: number) {
    return this.http.get<any>(`${environment.apiUrl}/solicitudes/${id}`);
  }
  public getSolicitudesInstitucion(institucion_id: number) {
    return this.http.get<any>(`${environment.apiUrl}/institucion/${institucion_id}/solicitudes/1`);
  }
  public getDatosUsuario(user_id: number) {
    return this.http.get<any>(`${environment.apiUrl}/usuario/${user_id}`);
  }
  public createCertificate(certificado: any) {
    return this.http.post<any>(`${environment.apiUrl}/certificado/create`, certificado);
  }
  public saveTransaction(certificado:any) {
    return this.http.post<any>(`${environment.apiUrl}/certificado/update`, certificado);
  }
  public getCertificados(user_id: number) {
    return this.http.get<any>(`${environment.apiUrl}/certificados/${user_id}`);
  }
  public gtCertificadosInstitucion(institucion_id: number) {
    return this.http.get<any>(`${environment.apiUrl}/certificados_institucion/${institucion_id}`);
  }
  public ValidarCertificado(hash: string) {
    return this.http.get<any>(`${environment.apiUrl}/validar_certificado/${hash}`);
  }
}
