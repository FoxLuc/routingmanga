import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemMangaComponent } from './item-manga/item-manga.component';
import { SearchMangaComponent } from './search-manga/search-manga.component';

const routes: Routes = [
  {path: 'item/:id', component: ItemMangaComponent},
  {path: 'search', component: SearchMangaComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
