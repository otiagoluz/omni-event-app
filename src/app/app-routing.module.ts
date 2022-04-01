
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInComponent } from './event/check-in/check-in.component';

const routes: Routes = [

  { path: '**', redirectTo: 'event/check-in' },

  { path: 'event', loadChildren: () => import('./event/event.module').then(m => m.EventModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
