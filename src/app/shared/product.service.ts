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
  {
    id: 2,
    title: 'Terzo prodotto',
    price: 64.99,
    rating: 3.5,
    description: `pregio non ha, non ha ragion la vita
    se non per lui per lui che all´uomo é tutto;
    sola discolpa al fato
    che noi mortali in terra
    pose a tanto patir senz´altro frutto`,
    categories: ['books']
  },
  {
    id: 3,
    title: 'quarto prodotto',
    price: 64.99,
    rating: 3.5,
    description: `pregio non ha, non ha ragion la vita
    se non per lui per lui che all´uomo é tutto;
    sola discolpa al fato
    che noi mortali in terra
    pose a tanto patir senz´altro frutto`,
    categories: ['books']
  },
  {
    id: 4,
    title: '4 prodotto',
    price: 64.99,
    rating: 3.5,
    description: `pregio non ha, non ha ragion la vita
    se non per lui per lui che all´uomo é tutto;
    sola discolpa al fato
    che noi mortali in terra
    pose a tanto patir senz´altro frutto`,
    categories: ['books']
  },
  {
    id: 5,
    title: '5 prodotto',
    price: 64.99,
    rating: 3.5,
    description: `pregio non ha, non ha ragion la vita
    se non per lui per lui che all´uomo é tutto;
    sola discolpa al fato
    che noi mortali in terra
    pose a tanto patir senz´altro frutto`,
    categories: ['books']
  },
  {
    id: 6,
    title: '6 prodotto',
    price: 64.99,
    rating: 3.5,
    description: `pregio non ha, non ha ragion la vita
    se non per lui per lui che all´uomo é tutto;
    sola discolpa al fato
    che noi mortali in terra
    pose a tanto patir senz´altro frutto`,
    categories: ['books']
  },
  {
    id: 7,
    title: '7 prodotto',
    price: 64.99,
    rating: 3.5,
    description: `pregio non ha, non ha ragion la vita
    se non per lui per lui che all´uomo é tutto;
    sola discolpa al fato
    che noi mortali in terra
    pose a tanto patir senz´altro frutto`,
    categories: ['books']
  },
  {
    id: 8,
    title: '8 prodotto',
    price: 64.99,
    rating: 3.5,
    description: `pregio non ha, non ha ragion la vita
    se non per lui per lui che all´uomo é tutto;
    sola discolpa al fato
    che noi mortali in terra
    pose a tanto patir senz´altro frutto`,
    categories: ['books']
  },
  {
    id: 9,
    title: '9 prodotto',
    price: 64.99,
    rating: 3.5,
    description: `pregio non ha, non ha ragion la vita
    se non per lui per lui che all´uomo é tutto;
    sola discolpa al fato
    che noi mortali in terra
    pose a tanto patir senz´altro frutto`,
    categories: ['books']
  },
  {
    id: 10,
    title: '10 prodotto',
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
    let find = products.find((p) => p.id === id);
    return find;
  }

}
