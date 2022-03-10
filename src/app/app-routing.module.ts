import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';

import { LoupComponent } from './components/article/loup/loup.component';


const routes: Routes = [
    // {path: '/', component: HeaderComponent},
    {path: 'article', component: ArticleComponent},
    {path: 'loup', component: LoupComponent}
    
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {

}