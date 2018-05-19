import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public categorySearch = '';
  public galleryArray = [
    {
      url: '../assets/cultural/atole.jpg',
      type: 'culture',
    },
    {
      url: '../assets/cultural/concha.jpg',
      type: 'culture',
    },
    {
      url: '../assets/cultural/maizprieto.jpg',
      type: 'culture',
    },
    {
      url: '../assets/inktober/diadelosmuertos.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/llorona.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/politicalCartoon/ladyliberty.jpg',
      type: 'politicalCartoon',
    },
    {
      url: '../assets/politicalCartoon/swamp.jpg',
      type: 'politicalCartoon',
    },
    {
      url: '../assets/cultural/lucha.jpg',
      type: 'cultural',
    },
    {
      url: '../assets/cultural/ojo.jpg',
      type: 'cultural',
    },
    {
      url: '../assets/cultural/concha2.jpg',
      type: 'cultural',
    },
    {
      url: '../assets/cultural/corazon.jpg',
      type: 'cultural',
    },
    {
      url: '../assets/cultural/evy.jpg',
      type: 'cultural',
    },
    {
      url: '../assets/cultural/muneca.jpg',
      type: 'cultural',
    },
    {
      url: '../assets/cultural/nopales.jpg',
      type: 'cultural',
    },
    {
      url: '../assets/inktober/alienfrida.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/alienmab.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/bats.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/bruja.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/burton.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/calavera.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/cantinflas.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/chupacabras.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/coco.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/donramon.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/goblin.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/goblin2.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/hauntedhouse.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/jirafales.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/juanga.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/nosferatu.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/pumpkin.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/rat.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/raven.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/roadmonster.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/seamonster.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/spiderevy.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/tree.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/vampire.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/inktober/werewolf.jpg',
      type: 'inktober',
    },
    {
      url: '../assets/politicalCartoon/dolls.jpg',
      type: 'politicalCartoon',
    },
    {
      url: '../assets/politicalCartoon/field.jpg',
      type: 'politicalCartoon',
    },
    {
      url: '../assets/politicalCartoon/fist.jpg',
      type: 'politicalCartoon',
    },
    {
      url: '../assets/politicalCartoon/icecream.jpg',
      type: 'politicalCartoon',
    },
    {
      url: '../assets/politicalCartoon/kellyanne.jpg',
      type: 'politicalCartoon',
    },
    {
      url: '../assets/politicalCartoon/ladyliberty.jpg',
      type: 'politicalCartoon',
    },
    {
      url: '../assets/politicalCartoon/ladyliberty2.jpg',
      type: 'politicalCartoon',
    },
    {
      url: '../assets/politicalCartoon/maga.jpg',
      type: 'politicalCartoon',
    },
    {
      url: '../assets/politicalCartoon/mcconell.jpg',
      type: 'politicalCartoon',
    },
    {
      url: '../assets/politicalCartoon/miller.jpg',
      type: 'politicalCartoon',
    },
    {
      url: '../assets/politicalCartoon/ovarypower.jpg',
      type: 'politicalCartoon',
    },
    {
      url: '../assets/politicalCartoon/Puppet.jpg',
      type: 'politicalCartoon',
    },
    {
      url: '../assets/politicalCartoon/spicer.jpg',
      type: 'politicalCartoon',
    },
    {
      url: '../assets/politicalCartoon/standingrock.jpg',
      type: 'politicalCartoon',
    },
    {
      url: '../assets/politicalCartoon/swamp.jpg',
      type: 'politicalCartoon',
    },
    {
      url: '../assets/politicalCartoon/toilet.jpg',
      type: 'politicalCartoon',
    },
    {
      url: '../assets/portraits/betty.jpg',
      type: 'portraits',
    },
    {
      url: '../assets/portraits/doctor.jpg',
      type: 'portraits',
    },
    {
      url: '../assets/portraits/smoking.jpg',
      type: 'portraits',
    },
    {
      url: '../assets/cactus.jpg',
      type: 'misc',
    },
    {
      url: '../assets/chameleon.jpg',
      type: 'misc',
    },
    {
      url: '../assets/flower.jpg',
      type: 'misc',
    },
    {
      url: '../assets/maiz.jpg',
      type: 'misc',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  changeCategory() {
    if (this.categorySearch === 'all') {
      this.categorySearch = '';
    }
  }
}
