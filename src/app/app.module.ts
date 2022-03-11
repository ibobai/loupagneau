import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticleComponent } from './components/article/article.component';
import { LoupComponent } from './components/article/loup/loup.component';

import { AppRoutingModule } from './app-routing.module';
import { OursComponent } from './components/article/ours/ours.component';
import { MoutonComponent } from './components/article/mouton/mouton.component';
import { PresentationComponent } from './components/presentation/presentation.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommingSoonComponent } from './components/comming-soon/comming-soon.component';


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
    PresentationComponent,
    CommingSoonComponent
 
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    MatIconModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
