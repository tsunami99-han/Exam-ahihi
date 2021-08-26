import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBookComponent } from './component/list-book/list-book.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateBookComponent } from './component/create-book/create-book.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EditBookComponent } from './component/edit-book/edit-book.component';
import { DeleteBookComponent } from './component/delete-book/delete-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    CreateBookComponent,
    EditBookComponent,
    DeleteBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
