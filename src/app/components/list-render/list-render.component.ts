import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    { name: 'Greg', type: 'Dog', age: 1},
    { name: 'Frigge', type: 'Cat', age: 6},
    { name: 'Lira', type: 'Dog', age: 2},
    { name: 'Pé de pano', type: 'Horse', age: 8}
  ];

  animalDetails = '';

  constructor() { }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

}
