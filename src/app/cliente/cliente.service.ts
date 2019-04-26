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

}
