import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UfficioComponent } from './components/ufficio/ufficio.component';
import { AuthGuard } from './core/auth.guard';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ufficio', component: UfficioComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
