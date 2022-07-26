import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/categories/services/categories.service';
import { Category } from '../../../categories/models/category.model';
import { AdvertisementsService } from '../../../advertisements/services/advertisements.service';
import { Advertisement } from '../../models/advertisement.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-advertisement-edit',
  templateUrl: './advertisement-edit.component.html',
  styleUrls: ['./advertisement-edit.component.scss']
})
export class AdvertisementEditComponent implements OnInit {

  formGroup!: FormGroup;

  advertisement!: Advertisement;

  advertisements!: Advertisement[];

  categories!: Category[];

  constructor(private advertisementService: AdvertisementsService,
              private fb: FormBuilder,
              private categoriesService: CategoriesService,
              private toastrService: ToastrService,) {
  }

  ngOnInit(): void {
    this.buildForm();

    this.getCategories();
  }

  onSubmit(): void {
    console.log(this.formGroup);
    const body: Advertisement = {
        ...this.advertisements,
        ...this.formGroup.value
      };
    if(this.formGroup.valid){
        this.advertisementService.create$(body).subscribe({
          next: () => {
            this.toastrService.success('Adverisement was successfully created. Go back to "Prodavalnik" page to see it!', 'Success');
          }
        })  
    }else{
          this.toastrService.error('The advertisement was not created! Some required fields are not filled!', 'Error');
    }
    }

  private getCategories(): void {
    this.categoriesService.getAll$().subscribe({
      next: (response) => {
        this.categories = response;
      }
    })
  }

  private buildForm(): void {
    if (!this.advertisement) {
      this.advertisement = new Advertisement();
    }

    this.formGroup = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      subtitle: ['', [Validators.required, Validators.minLength(3)]],
      categoryId: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      discount: ['', [Validators.min(0), Validators.max(100)]],
      posterImgUrl: '',
      isDeliveryIncluded: false,
      publishAt: ['', Validators.required]
    })
  }

}
