import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ContactModule } from './contacts/contact.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    LayoutModule,
    ContactModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
