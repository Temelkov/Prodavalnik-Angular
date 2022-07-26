import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './categories/components/categories-list/categories-list.component';
import { AdvertisementEditComponent } from './advertisements/components/advertisement-edit/advertisement-edit.component';
import { AdvertisementsListComponent } from './advertisements/components/advertisements-list/advertisements-list.component';

const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesListComponent
  },
  {
    path: 'advertisements',
    component: AdvertisementsListComponent
  },
  {
    path: 'advertisements/create',
    component: AdvertisementEditComponent
  },
  {
    path: '',
    redirectTo: 'advertisements',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
