import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { Categoria } from './categoria.model';
import { environment } from '../../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  apiUrl: string = environment.apiUrl;

  constructor(private Http: HttpClient) { }

  findAll() : Observable<Categoria[]> {
    const url = `${this.apiUrl}/categorias`
    return this.Http.get<Categoria[]>(url)

  }
}
