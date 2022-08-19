import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { Page404Module } from './page404/page404.module';
import { HttpinterceptorService } from './services/httpinterceptor.service';
import { MultiDimNavigationModule } from './multidimnavigation/multidimnavigation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MultiDimNavigationModule,
    HttpClientModule,
    MatProgressBarModule,
    Page404Module,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpinterceptorService, multi: true, },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
