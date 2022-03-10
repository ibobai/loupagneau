import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouton',
  templateUrl: './mouton.component.html',
  styleUrls: ['./mouton.component.css']
})
export class MoutonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  articles:any[] = [
    {
      id: 2,
      title: "La chèvre de monsieur Seguin",
      logo: "../../../assets/img/mouton.png",
      livreImg: "../../../assets/img/chevre.jpg",
      resume: "M. Seguin avait choisi, cette fois, une chèvre toute jeune croyant ainsi la retenir. Mais Blanquette, comme toutes les autres, préféra la bruyère des montagnes au pré vert de son clos; la liberté et ses risques plutôt que la sécurité et l'ennui. Elle comprit bientôt qu'il ne suffisait pas d'être brave et courageuse pour se défendre contre le loup qui, lui aussi, goûte la griserie des grands espaces.",
      extrait02: "Dragée sugar plum pudding carrot cake chocolate dragée. Topping topping gummies tart gummi bears liquorice tootsie roll sugar plum. Tart bonbon bear claw jelly beans marzipan pudding cake wafer. Caramels caramels cake gummi bears oat cake.",
      prixStandard: 5.25,
      prixBroche: 4.79,
      lien:"/mouton"
    }
  ];
}
