import { InputMaskModule } from '@ngneat/input-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CheckInComponent } from './check-in/check-in.component';
import { EventRoutingModule } from './event.routing.module';
import { EventContainer } from './event-container/event.container';



@NgModule({
  declarations: [
    CheckInComponent,
    EventContainer
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule,
    HttpClientModule,
    EventRoutingModule
  ],
})
export class EventModule { }
