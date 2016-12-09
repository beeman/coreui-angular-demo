import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CoreUIModule } from 'coreui-angular/dist';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot([]),

    CoreUIModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
