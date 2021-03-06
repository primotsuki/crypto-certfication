import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { JWTInterceptor } from '../app/core/jwt.interceptors';
import { ErrorInterceptor } from '../app/core/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule,
    NbLayoutModule,
    NbMenuModule,
    NbSidebarModule,
    NbToastrModule,
    NbButtonModule,
    NbWindowModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CertificadoRevocacionComponent } from './certificado-revocacion/certificado-revocacion.component';
import {MomentModule} from 'ngx-moment';

@NgModule({
  declarations: [
    AppComponent,
    CertificadoRevocacionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    FormsModule,
    ReactiveFormsModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbToastrModule.forRoot(),
    NbWindowModule.forRoot(),
    NbButtonModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions:{
        'm': 59
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
