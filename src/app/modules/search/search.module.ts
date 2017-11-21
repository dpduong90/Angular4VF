import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { searchRouter } from './search-routing.module';

@NgModule({
  imports: [
    CommonModule,
    searchRouter
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
