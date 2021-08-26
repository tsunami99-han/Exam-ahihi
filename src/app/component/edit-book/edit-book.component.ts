import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  id: any
  bookForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  })

  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getBook(this.id);
  })
  }
  getBook(id:number){
    return this.bookService.findById(id).subscribe(book => {
      console.log(book)
      this.bookForm.setValue(book);
      });
    };
  update(id:number){
    const book = this.bookForm.value;
    this.bookService.update(id, book).subscribe(() => {
      alert('Cập nhật thành công');
      // @ts-ignore
      this.router.navigate["books"]
    }, e => {
      console.log(e);
    });
  }
}
