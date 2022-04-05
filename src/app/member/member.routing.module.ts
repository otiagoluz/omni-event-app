import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventListComponent } from './event-list/event-list.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MemberListComponent } from './member-list/member-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberContainer } from './member-container/member.container';



const routes: Routes = [
  { path: '', component: MemberContainer,
    children: [
      { path: 'list', component: MemberListComponent },
      { path: 'create', component: MemberEditComponent} ,
      { path: 'edit/:id', component: MemberEditComponent },
      { path: 'events', component: EventListComponent },
      { path: 'events/:date', component: EventDetailComponent }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
