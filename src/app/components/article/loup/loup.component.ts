import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-loup',
  templateUrl: './loup.component.html',
  styleUrls: ['./loup.component.css']
})
export class LoupComponent implements OnInit {

  // @Input() articles:any = [];
  
  constructor() { }
  ngOnInit(): void {
  }

  articles:any[] = [
    {
      id: 1,
      title: "Le loup et L'agneaux",
      logo: "../../../assets/img/loup.png",
      livreImg: "../../../assets/img/Le-loup-et-l-agneau.jpg",
      resume: "Tandis qu’un agneau se désaltère, un loup l’apostrophe : comment ose-t-il boire dans la même eau que sa Majesté ? Après un court échange, il le tue sans autre forme de procès .",
      extrait01: "Brownie fruitcake marzipan bear claw candy canes muffin ice cream cookie pie. Liquorice sesame snaps soufflé biscuit lemon drops fruitcake liquorice cookie. Liquorice cotton candy apple pie bear claw danish soufflé marzipan tootsie roll brownie.",
      extrait02: "Cupcake cheesecake brownie carrot cake sugar plum. Chocolate bar pastry bonbon marshmallow sugar plum marzipan liquorice. Sugar plum bonbon donut candy powder tiramisu bonbon lemon drops. Caramels shortbread shortbread bonbon lollipop croissant marzipan.",
      prixStandard: 6.50,
      prixBroche: 8.79,
      lien:"/loup"
    }
  ];

  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //   },
  //   nav: true
  // }


}

