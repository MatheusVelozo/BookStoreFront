import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { Categoria } from './categoria.model';
import { environment } from '../../../../environments/environments';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  apiUrl: string = environment.apiUrl;

  constructor(private Http: HttpClient, private _snack: MatSnackBar) { }

  findAll() : Observable<Categoria[]> {
    const url = `${this.apiUrl}/categorias`
    return this.Http.get<Categoria[]>(url)

  }

  create(categoria: Categoria): Observable<Categoria>{
    const url =`${this.apiUrl}/categorias`
    return this.Http.post<Categoria>(url, categoria);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
    horizontalPosition: 'end',
    verticalPosition: 'top',
    duration: 3000
    })
  }
}
