import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoalbumComponent } from './photoalbum/photoalbum.component';

const routes: Routes = [
  { path: 'photo-album/:id', component: PhotoalbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
