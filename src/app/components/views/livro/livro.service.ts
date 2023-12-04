import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Livro } from './livro.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  apiUrl: String = environment.apiUrl

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAllByCategoria(id_cat: String): Observable<Livro[]> {

    const url = `${this.apiUrl}/livros?categoria=${id_cat}`;
    return this.http.get<Livro[]>(url);
  }

  findById(id: String): Observable<Livro> {
    const url = `${this.apiUrl}/livros/${id}`
    return this.http.get<Livro>(url)
  }

  update(livro: Livro): Observable<Livro> {
    const url = `${this.apiUrl}/livros/${livro.id}`
    return this.http.put<Livro>(url, livro) 
  }

  create(livro: Livro, id_cat: String): Observable<Livro> {
    const url = `${this.apiUrl}/livros?categoria=${id_cat}`
    return this.http.post<Livro>(url, livro)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
    horizontalPosition: 'end',
    verticalPosition: 'top',
    duration: 3000
    })
  }
}
