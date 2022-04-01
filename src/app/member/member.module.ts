import { MemberEditComponent } from './member-edit/member-edit.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberContainer } from './member-container/member.container';
import { MemberRoutingModule } from './member.routing.module';
import { InputMaskModule } from '@ngneat/input-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    MemberContainer,
    MemberListComponent,
    MemberEditComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule,
    HttpClientModule,
    MemberRoutingModule
  ],
})
export class MemberModule { }
