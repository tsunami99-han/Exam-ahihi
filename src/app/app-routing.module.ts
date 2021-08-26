import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListBookComponent} from "./component/list-book/list-book.component";
import {CreateBookComponent} from "./component/create-book/create-book.component";
import {EditBookComponent} from "./component/edit-book/edit-book.component";
import {DeleteBookComponent} from "./component/delete-book/delete-book.component";

const routes: Routes = [{
  path:'books',
  component: ListBookComponent
},{
  path:'books/create',
  component: CreateBookComponent
},{
  path: 'books/edit/:id',
  component: EditBookComponent
},{
  path: 'books/delete/:id',
  component: DeleteBookComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
