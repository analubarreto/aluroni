import { ICategory } from './../../Filters/ICategory';

export interface IItem {
  id: number;
  title: string;
  description: string;
  photo: string;
  size: number;
  serving: number;
  price: number;
  category: ICategory
}