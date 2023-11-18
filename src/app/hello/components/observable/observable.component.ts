import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../../services/observable.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit{

  constructor(private observableService: ObservableService) {}
  reloj = this.observableService.time;
  
  ngOnInit(): void {
    this.reloj.subscribe((datos) => {
      console.log(datos)
    })
  }

}
