import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(
    private http: HttpClient
  ) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public registerUser(user: any){
    return this.http.post<any>(`${environment.apiUrl}/register`, user).toPromise();
  }

  public login(user: any){
    return this.http.post<any>(`${environment.apiUrl}/login`, user)
    .pipe(map(user => {
      localStorage.setItem('currentUser', JSON.stringify(user.data));
      this.currentUserSubject.next(user.data);
      return user;
    }));
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }
  public logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  public get currentInstitucion() {
    return this.currentUserValue.institucion[0].id
  }
  public get currentRol() {
    return this.currentUserValue.rol.id
  }
}
