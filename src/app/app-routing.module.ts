import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './page/main/main.component';
import { AddClienteComponent } from './cliente/add/add.component';
import { AddProdutoComponent } from './produto/add/add.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "cadastro", component: AddClienteComponent },
  { path: "produto", component: AddProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
