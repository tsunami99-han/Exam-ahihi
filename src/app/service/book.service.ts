import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../model/book";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(API_URL);
  }

  save(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(API_URL, book);
  }

  findById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${API_URL}/${id}`);
  }

  update(id: number, book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${API_URL}/${id}`, book);
  }

  delete(id: number): Observable<Book> {
    return this.httpClient.delete<Book>(`${API_URL}/${id}`);
  }
}
