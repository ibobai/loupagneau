import { OursComponent } from './components/article/ours/ours.component';
import { MoutonComponent } from './components/article/mouton/mouton.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { HeaderComponent } from './components/header/header.component';
import { LoupComponent } from './components/article/loup/loup.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { CommingSoonComponent } from './components/comming-soon/comming-soon.component';

const routes: Routes = [
  // { path: 'accueil', redirectTo: '/', pathMatch: 'full' },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: HeaderComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'nosFables', component: ArticleComponent },
  { path: 'nousContacter', component: FormContactComponent },
  { path: 'loup', component: LoupComponent },
  { path: 'mouton', component: MoutonComponent },
  { path: 'ours', component: OursComponent },
  { path: 'commingsoon', component: CommingSoonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
