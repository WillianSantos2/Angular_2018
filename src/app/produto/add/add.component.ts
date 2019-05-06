import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddProdutoComponent implements OnInit {
  private produto: Produto;
  private produtos$: Observable<Produto[]>;

  constructor(private produtoService: ProdutoService) {
  }

  ngOnInit() {
    this.produto = new Produto;
    this.produtos$ = this.produtoService.getprodutos();
  }

  onSubmit(form) {
      if (form.valid) {
        this.produtoService.addProduto(this.produto)
          .subscribe(
            res => {
              alert("cadastrado");
              console.log(res);
              this.produto = new Produto;
              form.reset();
              this.produtos$ = this.produtoService.getprodutos();
            },
            err => {
              alert("Erro ao cadastrar!");
              console.log(err);
            }
          );
      }
   
  }

  edit(id: number, produto: Produto) {
    console.log(id, produto);
    this.produto = new Produto;
    // this.produto = produto;
    this.produtoService.getProduto(id)
      .subscribe(
        res => {
          this.produto = res
        },
        err => {
          console.log(err);
        }
      );
  }

  remover(id: number) {
    this.produtoService.deleteProduto(id);
  }

}
