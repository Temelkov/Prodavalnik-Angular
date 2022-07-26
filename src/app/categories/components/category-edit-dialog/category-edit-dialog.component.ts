import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../../models/category.model';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category-edit-dialog',
  templateUrl: './category-edit-dialog.component.html',
  styleUrls: ['./category-edit-dialog.component.scss']
})
export class CategoryEditDialogComponent implements OnInit {

  formGroup!: FormGroup;

  category!: Category;

  saved = new EventEmitter<Category>();

  constructor(
    private categoriesService: CategoriesService,
    private bsModalRef: BsModalRef,
    private toastrService: ToastrService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  hideDialog(): void {
    this.bsModalRef.hide();
  }

  onSubmit(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    const body: Category = {
      ...this.category,
      ...this.formGroup.value
    };

    this.categoriesService.save$(body).subscribe({
      next: (response) => {
        this.toastrService.success('Category was successfully saved.', 'Success');
        this.saved.emit(response);
        this.hideDialog();
      }
    })
  }

  private buildForm(): void {
    if (!this.category) {
      this.category = new Category();
    }

    this.formGroup = this.fb.group({
      name: [this.category.name, [Validators.required, Validators.minLength(3)]]
    });
  }

}
