import { Component, OnInit } from '@angular/core';
import { RickService } from '../../services/rick.service';

@Component({
  selector: 'app-rick',
  templateUrl: './rick.component.html',
  styleUrls: ['./rick.component.scss']
})
export class RickComponent implements OnInit {

  constructor(private rickSer : RickService) {}

  ngOnInit(): void {
    this.rickSer.getCharacters().subscribe(res => {
      console.log(res);
    })
  }

}
