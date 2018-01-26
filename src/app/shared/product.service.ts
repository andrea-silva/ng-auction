import {Injectable} from '@angular/core';


export interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  description: string;
  categories: string[];
}

const products: Product[] = [
  {
    id: 0,
    title: 'Primo prodotto',
    price: 24.99,
    rating: 4.3,
    description: 'nel mezzo del cammin di nostra vita mi ritrovai in una selva oscura che ladritta via era smarrita',
    categories: ['electronics', 'hardware']
  },
  {
    id: 1,
    title: 'Secondo prodotto',
    price: 64.99,
    rating: 3.5,
    description: `pregio non ha, non ha ragion la vita
    se non per lui per lui che all´uomo é tutto;
    sola discolpa al fato
    che noi mortali in terra
    pose a tanto patir senz´altro frutto`,
    categories: ['books']
  },
];

@Injectable()
export class ProductService {

  getProducts(): Product[] {
    return products;
  }

  getProductById(id: number): Product {
    return products.find((p) => p.id === id);
  }

}
