import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Category } from '../../models/category.model';
import { CategoriesService } from '../../services/categories.service';
import { CategoryDeleteDialogComponent } from '../category-delete-dialog/category-delete-dialog.component';
import { CategoryEditDialogComponent } from '../category-edit-dialog/category-edit-dialog.component';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  categories!: Category[];

  constructor(
    private categoriesService: CategoriesService,
    private bsModalService: BsModalService
  ) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  onCreateClick(): void {
    this.onEditClick();
  }

  onEditClick(category?: Category): void {
    const ref = this.bsModalService.show(CategoryEditDialogComponent, {
      initialState: {
        category: category
      }
    });

    if (ref.content) {
      ref.content.saved.subscribe({
        next: () => {
          this.getAll();
        }
      });
    }
  }

  onDeleteClick(category: Category): void {
    const ref = this.bsModalService.show(CategoryDeleteDialogComponent, {
      initialState: {
        category: category
      }
    })

    if (ref.content) {
      ref.content.categoryDeleted.subscribe({
        next: () => {
          this.getAll();
        }
      })
    }
  }

  private getAll(): void {
    this.categoriesService.getAll$().subscribe({
      next: (response) => {
        this.categories = response;
      }
    })
  }

}
