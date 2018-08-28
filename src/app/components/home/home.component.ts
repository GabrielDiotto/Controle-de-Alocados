import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    // Doughnut
    public doughnutChartLabels: string[] = ['Desalocados', 'Alocados', 'Vagas abertas'];
    public doughnutChartData: number[] = [200, 900, 100];
    public doughnutChartType: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
      console.log(e);
  }

}
