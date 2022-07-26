import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesListComponent } from './categories/components/categories-list/categories-list.component';
import { AdvertisementsListComponent } from './advertisements/components/advertisements-list/advertisements-list.component';
import { CategoryEditDialogComponent } from './categories/components/category-edit-dialog/category-edit-dialog.component';
import { CategoryDeleteDialogComponent } from './categories/components/category-delete-dialog/category-delete-dialog.component';
import { AdvertisementEditComponent } from './advertisements/components/advertisement-edit/advertisement-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesListComponent,
    AdvertisementsListComponent,
    CategoryEditDialogComponent,
    CategoryDeleteDialogComponent,
    AdvertisementEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
