import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { AlocarService } from '../../../services/alocar/alocar.service';
import Alocados from '../../../model/alocados';

@Component({
  selector: 'app-alocar',
  templateUrl: './alocar.component.html',
  styleUrls: ['./alocar.component.css']
})
export class AlocarComponent implements OnInit {
  alocados: Alocados[];

  constructor(private alocarService : AlocarService) { }

  displayedColumns: string[] = ['funcionario', 'cliente', 'inicioPrevisto', 'inicio', 'fimPrevisto', 'fim'];
  dataSource = new MatTableDataSource<Alocados>(this.alocados);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.getAlocados();
    this.dataSource.sort = this.sort;
  }

  getAlocados(): void {
    this.alocarService.getAlocados()
        .subscribe(alocados => {
          this.alocados = alocados
        })
  }
}