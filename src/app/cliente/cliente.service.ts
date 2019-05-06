import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes: Cliente[];
  private url: string = environment.url_rest + "clientes";

  constructor(
    private http: HttpClient
  ) {
    this.clientes = [];
  }

  public addCliente(cliente: Cliente) {
    //this.clientes.push(cliente);
    return this.http.post(this.url, cliente);
  }

  public getClientes() {
    //return this.clientes;
    return this.http.get<Cliente[]>(this.url);
  }

  public updateCliente(id: number, cliente: Cliente) {
    // return this.clientes[id] = cliente;
    return this.http.put(this.url + "/" + id, cliente);
  }

  public deleteCliente(id: number) {
    // this.clientes.splice(id, 1);
    return this.http.delete(this.url + "/" + id);
  }

  public getcliente(id: number) {
    // return this.clientes[id];
    return this.http.get<Cliente>(this.url + "/" + id);
  }

}
