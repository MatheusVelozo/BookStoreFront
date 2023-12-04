import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LivroService } from '../livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrl: './livro-update.component.css'
})
export class LivroUpdateComponent implements OnInit{

  id_cat: String = ''
  livro: Livro = {
    id: '',
    titulo: '',
    nome_autor: '',
    texto: ''
  }

  titulo = new FormControl("", [Validators.minLength(3)])
  nome_autor = new FormControl("", [Validators.minLength(3)])
  texto = new FormControl("", [Validators.minLength(10)])

  constructor(private service: LivroService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
      this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
      this.livro.id = this.route.snapshot.paramMap.get("id")!;
      this.findById()
  }

  findById(): void {
    this.service.findById(this.livro.id!).subscribe((resposta) => {
      this.livro = resposta
    });
  }

  update(): void {
    this.service.update(this.livro).subscribe((resposta) => {
      this.router.navigate([`categorias/${this.id_cat}/livros`]);
      this.service.mensagem("Livro editado com sucesso!")
    }, err => {
      this.router.navigate([`categorias/${this.id_cat}/livros`]);
      this.service.mensagem("Não foi possível editar o livro. Tente novamente..")
    })
  }

  cancel(): void {
    this.router.navigate([`categorias/${this.id_cat}/livros`])
  }

  getMessage() {
    if (this.titulo.invalid) {
      return "Campo Obrigatório.";
    }
    return false;
  }
}
