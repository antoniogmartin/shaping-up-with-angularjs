import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';
import { MenuIconsExampleComponent } from './menu-icons-example/menu-icons-example.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuIconsExampleComponent
  ],
  imports: [BrowserModule,BrowserAnimationsModule,MdButtonModule, MdCheckboxModule],
  providers: [],
  bootstrap: [AppComponent,MenuIconsExampleComponent]
})
export class AppModule { }
