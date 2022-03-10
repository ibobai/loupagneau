import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ours',
  templateUrl: './ours.component.html',
  styleUrls: ['./ours.component.css']
})
export class OursComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  articles:any[] = [
    {
      id: 3,
      title: "Boucle d'or",
      logo: "../../../assets/img/ours.png",
      livreImg: "../../../assets/img/boucleDor.jpg",
      resume: "Après avoir désobéi à sa maman et s'être perdue dans le bois, Boucle d'or arrive devant une jolie maisonnette. Elle entre, essaie les chaises, goûte la soupe et s'endort dans un petit lit. Lorsque les habitants de la maison - trois ours - rentrent chez eux, Boucle d'or est si effrayée qu'elle s'enfuit ; heureusement le petit ours lui indique le chemin pour rentrer chez elle !",
      extrait01: "Danish dessert marzipan liquorice croissant. Tootsie roll sugar plum chocolate cake caramels donut jelly-o oat cake cupcake marzipan. Sweet roll chupa chups oat cake muffin caramels. Macaroon donut carrot cake jujubes bear claw pie marshmallow.",
      extrait02: "Dragée sugar plum pudding carrot cake chocolate dragée. Topping topping gummies tart gummi bears liquorice tootsie roll sugar plum. Tart bonbon bear claw jelly beans marzipan pudding cake wafer. Caramels caramels cake gummi bears oat cake.",
      prixStandard: 5.25,
      prixBroche: 4.79,
      lien:"/ours"
    }
  ];

}
