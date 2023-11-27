import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit{
  constructor () { }

  ngOnInit(): void {
    
  }

  row: any = {};
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];
}
