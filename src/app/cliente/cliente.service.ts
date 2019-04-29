import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes:Cliente[];

  constructor() { 
    this.clientes = [];
  }

  public addCliente(cliente:Cliente){
    this.clientes.push(cliente);
  }

  public getClientes(){
    return this.clientes;
  }

  public updateCliente(id:number, cliente:Cliente){
    return this.clientes[id] = cliente;
  }

  public deleteCliente(id:number){
    this.clientes.splice(id, 1);
  }

  public getcliente(id:number){
    return this.clientes[id];
  }

}
