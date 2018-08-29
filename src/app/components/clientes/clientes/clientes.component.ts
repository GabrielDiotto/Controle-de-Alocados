import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../../services/clientes/clientes.service';
import Cliente from '../../../model/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[];
  constructor(private clienteService : ClientesService) { }

  ngOnInit() {
    this.getClientes();
  }

  getClientes(): void {
    this.clienteService.getClientes()
        .subscribe(clientes => {
          this.clientes = clientes
          console.log(this.clientes)
        })
  }

}
