import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCollectionComponent } from './book-collection/book-collection.component';


const routes: Routes = [
  { path: 'collections', component: BookCollectionComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
