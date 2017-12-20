import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicgenreArtistsPageComponent } from './musicgenre-artists-page.component';
import { MusicgenreartistsRouter } from './musicgenre-artists-page-routing.module';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    MusicgenreartistsRouter,
    SharedComponentsModule
  ],
  declarations: [
    MusicgenreArtistsPageComponent
  ]
})
export class MusicgenreArtistsPageModule { }
