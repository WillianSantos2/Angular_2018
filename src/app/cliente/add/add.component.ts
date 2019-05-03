import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  private cliente: Cliente;
  private clientes$: Observable<Cliente[]>;

  constructor(private clienteService: ClienteService) {
  }

  ngOnInit() {
    this.cliente = new Cliente;
    this.clientes$ = this.clienteService.getClientes();
  }

  onSubmit(form) {
    if (this.cliente.pws == form.value.conf) {
      if (form.valid) {
        this.clienteService.addCliente(this.cliente)
          .subscribe(
            res => {
              alert("cadastrado");
              console.log(res);
              this.cliente = new Cliente;
              form.reset();
            },
            err => {
              alert("Erro ao cadastrar!");
              console.log(err);
            }
          );
      }
    }
    this.clientes$ = this.clienteService.getClientes();
  }

  edit(id: number, cliente: Cliente) {
    console.log(id, cliente);
    this.cliente = new Cliente;
    // this.cliente = cliente;
    this.cliente = this.clienteService.getcliente(id);
  }

  remover(id: number) {
    this.clienteService.deleteCliente(id);
  }

}
