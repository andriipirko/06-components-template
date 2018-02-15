import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Girl } from './girl';

@Injectable()
export class GirlsListService {

  girls: Girl[] = [
    {
      "name": "alessandraminko",
      "instagramUrl": "https://www.instagram.com/alessandraminko/",
      "country": "Poland",
      "photo": "assets/pictures/alessandraminko.jpg"
    }, 
    {
      "name": "nathallae",
      "instagramUrl": "https://www.instagram.com/nathallae/",
      "country": "Poland",
      "photo": "assets/pictures/nathallae.jpg"
    },
    {
      "name": "aagata_h",
      "instagramUrl": "https://www.instagram.com/aagata_h/",
      "country": "Poland",
      "photo": "assets/pictures/aagata_h.jpg"
    },
    {
      "name": "_kinga_cz",
      "instagramUrl": "https://www.instagram.com/_kinga_cz/",
      "country": "Poland",
      "photo": "assets/pictures/_kinga_cz.jpg"
    },
    {
      "name": "pershinatany",
      "instagramUrl": "https://www.instagram.com/pershinatany/",
      "country": "Russia",
      "photo": "assets/pictures/pershinatany.jpg"
    },
    {
      "name": "mashamartskaya",
      "instagramUrl": "https://www.instagram.com/mashamartskaya/",
      "country": "Ukraine",
      "photo": "assets/pictures/mashamartskaya.jpg"
    },
    {
      "name": "veronicabielik",
      "instagramUrl": "https://www.instagram.com/veronicabielik/",
      "country": "Poland",
      "photo": "assets/pictures/veronicabielik.jpg"
    },
    {
      "name": "m.ulyana",
      "instagramUrl": "https://www.instagram.com/m.ulyana/",
      "country": "Ukraine",
      "photo": "assets/pictures/m.ulyana.jpg"
    },
    {
      "name": "iranovyk",
      "instagramUrl": "https://www.instagram.com/iranovyk/",
      "country": "Ukraine",
      "photo": "assets/pictures/iranovyk.jpg"
    },
    {
      "name": "weronika.schubert",
      "instagramUrl": "https://www.instagram.com/weronika.schubert/",
      "country": "Poland",
      "photo": "assets/pictures/weronika.schubert.jpg"
    },
    {
      "name": "lerrrooooooona",
      "instagramUrl": "https://www.instagram.com/lerrrooooooona/",
      "country": "Russia",
      "photo": "assets/pictures/lerrrooooooona.jpg"
    },
    {
      "name": "dianka_yan",
      "instagramUrl": "https://www.instagram.com/dianka_yan/",
      "country": "Ukraine",
      "photo": "assets/pictures/dianka_yan.jpg"
    },
    {
      "name": "V I C T O R I A",
      "instagramUrl": "https://www.instagram.com/realbeautyinside_/",
      "country": "Ukraine",
      "photo": "assets/pictures/realbeautyinside_.jpg"
    }
  ];

  Girls: Girl[];

  constructor(private http: HttpClient) { 
    this.Girls = this.girls;
  }

  get GirlsList() {
    //return this.http.get<Girl[]>('assets/girl-list.json');
    return this.Girls;
  }
}
