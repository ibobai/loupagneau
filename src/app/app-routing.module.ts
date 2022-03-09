import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoupComponent } from './components/loup/loup.component';


const routes: Routes = [
    {path: 'header', component: HeaderComponent},
    {path: 'loup', component: LoupComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {

}