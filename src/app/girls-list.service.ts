import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Girl } from './girl';

@Injectable()
export class GirlsListService {

  // girls: Girl[] = [
  //   {
  //     "name": "alessandraminko",
  //     "instagramUrl": "https://www.instagram.com/alessandraminko/",
  //     "country": "Poland",
  //     "photo": "assets/pictures/alessandraminko.jpg"
  //   }, 
  //   {
  //     "name": "nathallae",
  //     "instagramUrl": "https://www.instagram.com/nathallae/",
  //     "country": "Poland",
  //     "photo": "assets/pictures/nathallae.jpg"
  //   },
  //   {
  //     "name": "aagata_h",
  //     "instagramUrl": "https://www.instagram.com/aagata_h/",
  //     "country": "Poland",
  //     "photo": "assets/pictures/aagata_h.jpg"
  //   },
  //   {
  //     "name": "_kinga_cz",
  //     "instagramUrl": "https://www.instagram.com/_kinga_cz/",
  //     "country": "Poland",
  //     "photo": "assets/pictures/kinga_cz.jpg"
  //   },
  //   {
  //     "name": "pershinatany",
  //     "instagramUrl": "https://www.instagram.com/pershinatany/",
  //     "country": "Russia",
  //     "photo": "assets/pictures/pershinatany.jpg"
  //   },
  //   {
  //     "name": "mashamartskaya",
  //     "instagramUrl": "https://www.instagram.com/mashamartskaya/",
  //     "country": "Ukraine",
  //     "photo": "assets/pictures/mashamartskaya.jpg"
  //   },
  //   {
  //     "name": "veronicabielik",
  //     "instagramUrl": "https://www.instagram.com/veronicabielik/",
  //     "country": "Poland",
  //     "photo": "assets/pictures/veronicabielik.jpg"
  //   },
  //   {
  //     "name": "m.ulyana",
  //     "instagramUrl": "https://www.instagram.com/m.ulyana/",
  //     "country": "Ukraine",
  //     "photo": "assets/pictures/m.ulyana.jpg"
  //   },
  //   {
  //     "name": "iranovyk",
  //     "instagramUrl": "https://www.instagram.com/iranovyk/",
  //     "country": "Ukraine",
  //     "photo": "assets/pictures/iranovyk.jpg"
  //   },
  //   {
  //     "name": "weronika.schubert",
  //     "instagramUrl": "https://www.instagram.com/weronika.schubert/",
  //     "country": "Poland",
  //     "photo": "assets/pictures/weronika.schubert.jpg"
  //   },
  //   {
  //     "name": "lerrrooooooona",
  //     "instagramUrl": "https://www.instagram.com/lerrrooooooona/",
  //     "country": "Russia",
  //     "photo": "assets/pictures/lerrrooooooona.jpg"
  //   },
  //   {
  //     "name": "dianka_yan",
  //     "instagramUrl": "https://www.instagram.com/dianka_yan/",
  //     "country": "Ukraine",
  //     "photo": "assets/pictures/dianka_yan.jpg"
  //   },
  //   {
  //     "name": "V I C T O R I A",
  //     "instagramUrl": "https://www.instagram.com/realbeautyinside_/",
  //     "country": "Ukraine",
  //     "photo": "assets/pictures/realbeautyinside_.jpg"
  //   }
  // ];

  GirlList: Girl[];

  constructor(private http: Http) { 
    this.GirlList = [];
    this.getGirlList();
  }

  getGirlList(){
    this.http.get('http://localhost:52412/api/Girls')
    .map((data : Response) =>{
      return data.json() as Girl[];
    }).toPromise().then(x => {
      this.GirlList = x;
    })
  }

  postGirl(grl : Girl){
    alert(grl.name);
    
    var body = JSON.stringify(grl);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:52412/api/Girls',body,requestOptions).subscribe(x => x.json());
  }

  postGirlList(){
    this.http.get('http://localhost:52412/api/Girls?id=1&name=Andrew&instagramUrl=123&country=Ukraine&photo=321')
    .subscribe((res: Response) => {
      alert(res);
    })
  }
}
