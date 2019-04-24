import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  private cliente: Cliente;

  constructor() { }

  ngOnInit() {
    this.cliente = new Cliente;
  }

  onSubmit(form){
    console.log(form);
    if (form.valid){
      
    }
  }
}
