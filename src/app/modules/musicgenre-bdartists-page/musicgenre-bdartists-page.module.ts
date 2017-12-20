import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicgenreartistsRouter } from './musicgenre-bdartists-page-routing.module';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { MusicgenreBdartistsPageComponent } from './musicgenre-bdartists-page.component';

@NgModule({
  imports: [
    CommonModule,
    MusicgenreartistsRouter,
    SharedComponentsModule
  ],
  declarations: [MusicgenreBdartistsPageComponent]
})
export class MusicgenreBdartistsPageModule { }
