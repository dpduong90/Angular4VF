import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
//import { PlaylistitemComponent } from './shared/components/items/playlistitem/playlistitem.component';
//import { SplaylistComponent } from "./shared/components/section/splaylist/splaylist.component";
import { AppRoutingModule } from './app-routing.module';
//import { VideoitemComponent } from "./shared/components/items/videoitem/videoitem.component";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
