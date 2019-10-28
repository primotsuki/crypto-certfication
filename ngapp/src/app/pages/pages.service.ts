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
}
