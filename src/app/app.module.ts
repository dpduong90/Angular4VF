import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routes
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
