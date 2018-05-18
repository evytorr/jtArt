import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public storeArray = [
    {
      url: '../assets/cultural/atole.jpg',
      type: 'culture',
      title: 'Atolito y Conchita',
      dimensions: '8.5 x 11"',
      price: '$10.00',
    },
    {
      url: '../assets/cultural/concha.jpg',
      type: 'culture',
      title: 'Que Concha!',
      dimensions: '5 x 6"',
      price: '$7.00',
    },
    {
      url: '../assets/cultural/maizprieto.jpg',
      type: 'culture',
      title: 'Que Chulada de Maiz Prieto',
      dimensions: '5 x 6"',
      price: '$7.00',
    },
    {
      url: '../assets/cultural/ojo.jpg',
      type: 'cultural',
      title: 'Hechandole el Ojo al Pan Dulce (Eyeing the Sweet Bread)',
      dimensions: '8.5 x 5.5"',
      price: '$10.00',
    },
    {
      url: '../assets/cultural/concha2.jpg',
      type: 'cultural',
      title: 'Tomando Chocolatito con Conchita (Drinking Chocolate and Eating a Shell)',
      dimensions: '8.5 x 5.5"',
      price: '$10.00',
    },
    {
      url: '../assets/cultural/corazon.jpg',
      type: 'cultural',
      title: 'Cactus Heart',
      dimensions: '8.5 x 5.5"',
      price: '$10.00',
    },
    {
      url: '../assets/cultural/evy.jpg',
      type: 'cultural',
      title: 'Con el Nopal en la Frente',
      dimensions: '8.5 x 5.5"',
      price: '$10.00',
    },
    {
      url: '../assets/cultural/muneca.jpg',
      type: 'cultural',
      title: 'Muñeca María (Mexicana Barbie)',
      dimensions: '8.5 x 5.5"',
      price: '$10.00',
    },
    {
      url: '../assets/cultural/nopales.jpg',
      type: 'cultural',
      title: 'Nopales! (Sigue Sigue)',
      dimensions: '5 x 6"',
      price: '$7.00',
    },
    {
      url: '../assets/inktober/goblin.jpg',
      type: 'inktober',
      title: 'Goblin (Original)',
      dimensions: '',
      price: '$35.00',
    },
    {
      url: '../assets/inktober/raven.jpg',
      type: 'inktober',
      title: 'The Raven on Bust of Athena (Original)',
      dimensions: '8.5 x 10"',
      price: '$40.00',
    },
    {
      url: '../assets/inktober/tree.jpg',
      type: 'inktober',
      title: 'Creepy Tree',
      dimensions: '8.5 x 10"',
      price: '$10.00',
    },
    {
      url: '../assets/cactus.jpg',
      type: 'misc',
      title: 'Flor de Cactus',
      dimensions: '8.5 x 10"',
      price: '$10.00',
    },
    {
      url: '../assets/flower.jpg',
      type: 'misc',
      title: 'Cempasuchil (Flor de Muerto)',
      dimensions: '8.5 x 10"',
      price: '$10.00',
    },
    {
      url: '../assets/maiz.jpg',
      type: 'misc',
      title: 'Visión de Centeotl',
      dimensions: '8.5 x 5.5"',
      price: '$40.00',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
