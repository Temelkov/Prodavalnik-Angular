import { Category } from '../../categories/models/category.model';

export class Advertisement {
  id!: number;
  created!: Date;
  lastUpdated!: Date;
  categoryId!: number;
  title!: string;
  subtitle!: string;
  price!: number;
  discount!: number;
  isDeliveryIncluded!: boolean;
  posterImgUrl!: string;
  publishAt!: Date;
  category!: Category;
}
