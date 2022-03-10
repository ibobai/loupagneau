import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() {
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
    },
    {
      id: 2,
      title: "La chèvre de monsieur Seguin",
      logo: "../../../assets/img/mouton.png",
      livreImg: "../../../assets/img/chevre.jpg",
      resume: "M. Seguin avait choisi, cette fois, une chèvre toute jeune croyant ainsi la retenir. Mais Blanquette, comme toutes les autres, préféra la bruyère des montagnes au pré vert de son clos; la liberté et ses risques plutôt que la sécurité et l'ennui. Elle comprit bientôt qu'il ne suffisait pas d'être brave et courageuse pour se défendre contre le loup qui, lui aussi, goûte la griserie des grands espaces.",
      extrait02: "Dragée sugar plum pudding carrot cake chocolate dragée. Topping topping gummies tart gummi bears liquorice tootsie roll sugar plum. Tart bonbon bear claw jelly beans marzipan pudding cake wafer. Caramels caramels cake gummi bears oat cake.",
      prixStandard: 5.25,
      prixBroche: 4.79,
      lien:""
    },
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
      lien:""
    }
  ];


  //A revoir
  getArticles() : any {
    return this.articles;
  }
  
  ngOnInit(): void {
  }

}
