import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Importar RouterModule

import { RecentImagesComponent } from './recent-images/recent-images.component';
import { PopularImagesComponent } from './popular-images/popular-images.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    RecentImagesComponent,
    PopularImagesComponent,
    ImageDetailComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule

  ],
  exports: [
    RecentImagesComponent,
    PopularImagesComponent,
    ImageDetailComponent,
    SearchComponent
  ]
})
export class SharedModule { }
