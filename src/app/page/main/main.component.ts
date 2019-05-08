import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../produto/produto.service';
import { Observable } from 'rxjs';
import { Produto } from '../../produto/produto';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private produtos$: Observable<Produto[]>

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.atualizalista();
  }

  async atualizalista(){
    this.produtos$ = this.produtoService.getprodutos();
  } 

}
