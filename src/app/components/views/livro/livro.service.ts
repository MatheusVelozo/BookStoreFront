import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Livro } from './livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  apiUrl: String = environment.apiUrl

  constructor(private http: HttpClient) { }

  findAllByCategoria(id_cat: String): Observable<Livro[]> {

    const url = `${this.apiUrl}/livros?categoria=${id_cat}`;
    return this.http.get<Livro[]>(url);
  }
}
