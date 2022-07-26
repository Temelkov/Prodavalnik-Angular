import { Component, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../../models/category.model';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category-delete-dialog',
  templateUrl: './category-delete-dialog.component.html',
  styleUrls: ['./category-delete-dialog.component.scss']
})
export class CategoryDeleteDialogComponent {

  category!: Category;

  categoryDeleted = new EventEmitter<void>();

  constructor(private categoriesService: CategoriesService,
              private bsModalRef: BsModalRef,
              private toastrService: ToastrService) {
  }

  deleteCategory(): void {
    this.categoriesService.delete$(this.category.id).subscribe({
      next: () => {
        this.toastrService.success('Category was successfully deleted.', 'Success');
        this.hideDialog();
        this.categoryDeleted.emit();
      }
    })
  }

  hideDialog(): void {
    this.bsModalRef.hide();
  }

}
