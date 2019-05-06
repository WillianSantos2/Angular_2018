import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  
  private url: string = environment.url_rest + "produtos";
  private produtos: Produto[];

  constructor(
    private http: HttpClient
  ) {
    this.produtos = [];
  }

  public addProduto(produto: Produto) {
    //this.produtos.push(Produto);
    return this.http.post(this.url, produto);
  }

  public getprodutos() {
    //return this.produtos;
    return this.http.get<Produto[]>(this.url);
  }

  public updateProduto(id: number, produto: Produto) {
    // return this.produtos[id] = Produto;
    return this.http.put(this.url + "/" + id, produto);
  }

  public deleteProduto(id: number) {
    // this.produtos.splice(id, 1);
    return this.http.delete(this.url + "/" + id);
  }

  public getProduto(id: number) {
    // return this.produtos[id];
    return this.http.get<Produto>(this.url + "/" + id);
  }

}
