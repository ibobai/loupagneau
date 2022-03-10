import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from "src/app/components/article/article.component"

@Component({
  selector: 'app-loup',
  templateUrl: './loup.component.html',
  styleUrls: ['./loup.component.css']
})
export class LoupComponent implements OnInit {

  //A modifier
  // private art: any;
  // art = ArticleComponent.getArticles();

  constructor() { }

  ngOnInit(): void {
  }

}
