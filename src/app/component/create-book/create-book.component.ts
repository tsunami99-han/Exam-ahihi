import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
bookForm: FormGroup = new FormGroup({
  title: new FormControl(),
  author: new FormControl(),
  description: new FormControl()
})
  constructor(private httpClient: HttpClient,
              private router:Router,
              private bookService: BookService) { }

  ngOnInit(): void {
  this.bookForm= new FormGroup({
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl()
    })
  }
  submit() {
    const book = this.bookForm.value;
    this.bookService.save(book).subscribe(() => {
      this.bookForm.reset();
      alert('Tạo thành công');
    }, e => {
      console.log(e);
    });
  }
}
