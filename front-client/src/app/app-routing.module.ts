import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path:'', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
