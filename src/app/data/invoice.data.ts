import { Invoice } from '../models/invoice';

export const invoiceData: any = {
  id: 1,
  name: 'Componentes de PC',
  client: {
    name: 'José Alejandro',
    lastName: 'Carrillo',
    address: {
      country: 'USA',
      city: 'New York',
      street: '5th Avenue',
      number: 742,
    },
  },
  company: {
    name: 'Tech Solutions',
    fiscalNumber: 123456,
  },
  items: [
    {
      id: 1,
      product: 'Procesador Intel i7',
      price: 300,
      quantity: 1,
    },
    {
      id: 2,
      product: 'Procesador Asus i7',
      price: 250,
      quantity: 1,
    },
    {
      id: 3,
      product: 'Procesador Acer i7',
      price: 400,
      quantity: 1,
    },
    {
      id: 4,
      product: 'Procesador HP i7',
      price: 600,
      quantity: 5,
    },
  ],
};
