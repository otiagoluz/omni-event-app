import { MemberModule } from './member/member.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventModule } from './event/event.module';
import { InputMaskModule } from '@ngneat/input-mask';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventModule,
    InputMaskModule,
    MemberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
