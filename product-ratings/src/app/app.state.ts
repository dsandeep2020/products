import { Product } from './models/product.model';

export interface appState {
  readonly product : Product[];
}