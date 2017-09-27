import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//import { LoggedInGuard } from './guards/logged-in.guard';


export const routes: Routes = [
 { path: 'login', loadChildren: 'app/login/login.module#LoginModule' }
 /* ,{
   path: '',
   loadChildren: 'app/shell/shell.module#ShellModule',
   canActivate: [LoggedInGuard]
 } */
 , { path: '**', redirectTo: '/login' }
];


@NgModule({
 imports: [
   CommonModule,
   RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule {}
