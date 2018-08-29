import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../../services/funcionarios/funcionarios.service';
import Funcionario from '../../model/funcionario';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {
  funcionarios: Funcionario[];
  constructor(private funcionarioService: FuncionariosService) { }

  ngOnInit() {
    this.getFuncionarios();
  }

  getFuncionarios(): void {
    this.funcionarioService.getFuncionarios()
        .subscribe(funcionarios => {
          debugger
          this.funcionarios = funcionarios
          console.log(this.funcionarios)
        })
  }
}
