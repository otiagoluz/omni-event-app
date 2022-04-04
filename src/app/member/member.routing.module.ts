import { MemberEditComponent } from './member-edit/member-edit.component';
import { MemberListComponent } from './member-list/member-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberContainer } from './member-container/member.container';



const routes: Routes = [
  { path: '', component: MemberContainer,
    children: [
      { path: 'list', component: MemberListComponent},
      { path: 'create', component: MemberEditComponent},
      { path: 'edit/:id', component: MemberEditComponent}

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
