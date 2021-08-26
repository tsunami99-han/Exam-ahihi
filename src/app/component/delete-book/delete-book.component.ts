import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  id: any
  bookForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  })
  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService,
              private router: Router) { }

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
  delete(id: number){
    this.bookService.delete(id).subscribe(() => {
      alert("Xóa thành công");
      // @ts-ignore
      this.router.navigate["/books"]
    })
  }
}
