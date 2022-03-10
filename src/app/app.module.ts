import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticleComponent } from './components/article/article.component';
import { LoupComponent } from './components/loup/loup.component';

import { AppRoutingModule } from './app-routing.module';
import { OursComponent } from './components/ours/ours.component';
import { MoutonComponent } from './components/mouton/mouton.component';
import { PresentationComponent } from './components/presentation/presentation.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormContactComponent,
    FooterComponent,
    NavbarComponent,
    ArticleComponent,
    LoupComponent,
    OursComponent,
    MoutonComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
