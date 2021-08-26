import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book";
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  books: Book[]= []
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.bookService.getAll().subscribe(bookList => {
      console.log(bookList);
      this.books=bookList;
    })
  }
}
