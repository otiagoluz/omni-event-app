
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberContainer } from './member-container/member.container';



const routes: Routes = [
  { path: '', component: MemberContainer,
    children: [


    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
