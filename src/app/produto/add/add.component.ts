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
    this.atualizaLista();
  }

  onSubmit(form) {
    if (form.valid) {
      this.produtoService.addProduto(this.produto)
        .subscribe(
          res => {
            alert("cadastrado");
            //console.log(res);
            this.produto = new Produto;
            form.reset();
            this.atualizaLista();
          },
          err => {
            alert("Erro ao cadastrar!");
            console.log(err);
          }
        );
    }

  }

  edit(id: number, produto: Produto) {
    //console.log(id, produto);
    this.produto = new Produto;
    //this.produto = produto;
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
    if (confirm("Remover o registro?")) {
      this.produtoService.deleteProduto(id)
        .subscribe(
          res => {
            alert("Removido!");
            this.atualizaLista();
          },
          err => {
            alert("Erro ao remover: " + err)
          }
        );
    }
  }

  atualizaLista() {
    this.produtos$ = this.produtoService.getprodutos();
  }
  
//Foto ------------------------------------
  async addFoto(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = _ => {
        this.produto.fotos.push(""+reader.result);
      }
    }
    console.log(this.produto);
  }

  delFoto(idFoto){
    this.produto.fotos.splice(idFoto,1)
  }
}
