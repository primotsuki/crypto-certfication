import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule,
    NbLayoutModule,
    NbMenuModule,
    NbSidebarModule,
    NbToastrModule,
    NbButtonModule,
    NbWindowModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbToastrModule.forRoot(),
    NbWindowModule.forRoot(),
    NbButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
