import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RecentImagesComponent } from './shared/recent-images/recent-images.component';
import { PopularImagesComponent } from './shared/popular-images/popular-images.component';
import { ImageDetailComponent } from './shared/image-detail/image-detail.component';
import { SearchComponent } from './shared/search/search.component';

const routes: Routes = [
  { path: 'recent', component: RecentImagesComponent },
  { path: 'popular', component: PopularImagesComponent },
  { path: 'detail/:id', component: ImageDetailComponent },
  { path: 'search', component: SearchComponent },
  { path: '', redirectTo: '/recent', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
