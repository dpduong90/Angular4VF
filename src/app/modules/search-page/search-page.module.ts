import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Searchrouter } from './search-page-routing.module';
import { SearchPageComponent } from './search-page.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    Searchrouter,
    SharedComponentsModule
  ],
  declarations: [SearchPageComponent]
})
export class SearchPageModule { }
