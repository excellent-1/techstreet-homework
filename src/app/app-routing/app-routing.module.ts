import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
 { path: 'login', loadChildren: 'app/login/login.module#LoginModule' }
 , { path: '**', redirectTo: '/login' }
];


@NgModule({
 imports: [
   CommonModule,
   RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule {}
