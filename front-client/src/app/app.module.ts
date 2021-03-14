import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './common/dialog/dialog.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

import ActivateGuard from './services/guards/activate-guard';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DialogComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DashboardModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    MaterialModule,
  ],
  providers: [ActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
