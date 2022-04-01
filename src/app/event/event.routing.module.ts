import { CheckInComponent } from './check-in/check-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventContainer } from './event-container/event.container';


const routes: Routes = [
  { path: '', component: EventContainer,
    children: [
      { path: 'check-in', component: CheckInComponent },
      { path: 'check-in', component: CheckInComponent }

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
