import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { HeaderComponent } from './components/header/header.component';
import { LoupComponent } from './components/loup/loup.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { preserveWhitespacesDefault } from '@angular/compiler';

const routes: Routes = [
  // { path: 'accueil', redirectTo: '/', pathMatch: 'full' },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: HeaderComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'nosFables', component: ArticleComponent },
  { path: 'nousContacter', component: FormContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
