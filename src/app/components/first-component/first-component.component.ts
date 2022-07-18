import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Alessandra';
  age: number = 42;
  job = 'Pogramadora';
  hobbies = ['Dançar', 'Viajar', 'Jogar'];
  car = {
    name: 'CrossFox',
    year: 2008
  }

  constructor() { }

  ngOnInit(): void {
  }

}
