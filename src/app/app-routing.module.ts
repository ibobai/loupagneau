import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { HeaderComponent } from './components/header/header.component';
import { LoupComponent } from './components/loup/loup.component';


const routes: Routes = [
    // {path: '/', component: HeaderComponent},
    {path: 'loup', component: LoupComponent},
    {path: 'fable', component: ArticleComponent}
    
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {

}