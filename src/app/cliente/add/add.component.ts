import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddClienteComponent implements OnInit {

  private cliente: Cliente;
  private clientes$: Observable<Cliente[]>;

  constructor(private clienteService: ClienteService) {
  }

  ngOnInit() {
    this.cliente = new Cliente;
    this.atualizaLista();
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
              this.atualizaLista();
            },
            err => {
              alert("Erro ao cadastrar!");
              console.log(err);
            }
          );
      }
    }

  }

  edit(id: number) {
    this.cliente = new Cliente;
    // this.cliente = cliente;
    this.clienteService.getcliente(id)
      .subscribe(
        res => {
          this.cliente = res
        },
        err => {
          console.log(err);
        }
      );
  }

  remover(id: number) {
    if (confirm("Remover o registro?")) {
      this.clienteService.deleteCliente(id)
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
    this.clientes$ = this.clienteService.getClientes();
  }
  
}
