export interface AddOn {
  id: string;
  name: string;
  price: number;
  isAvailable: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isAvailable: boolean;
  addOns: AddOn[];
}

export interface SubCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export interface MainCategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  subCategories: SubCategory[];
}

export const dummyMenuData: MainCategory[] = [
  {
    id: '1',
    name: 'Burgers',
    description: 'Delicious burgers made with fresh ingredients',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
    subCategories: [
      {
        id: '1-1',
        name: 'Veg Burgers',
        description: 'Vegetarian burger options',
        items: [
          {
            id: '1-1-1',
            name: 'Aloo Tikki Burger',
            description: 'Crispy potato patty with fresh vegetables and special sauce',
            price: 80,
            imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
            isAvailable: true,
            addOns: [
              { id: '1-1-1-1', name: 'Extra Cheese', price: 20, isAvailable: true },
              { id: '1-1-1-2', name: 'Extra Patty', price: 30, isAvailable: true },
              { id: '1-1-1-3', name: 'Extra Sauce', price: 10, isAvailable: true }
            ]
          },
          {
            id: '1-1-2',
            name: 'Veggie Delight',
            description: 'Loaded with fresh vegetables and special sauce',
            price: 90,
            imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
            isAvailable: true,
            addOns: [
              { id: '1-1-2-1', name: 'Extra Cheese', price: 20, isAvailable: true },
              { id: '1-1-2-2', name: 'Extra Patty', price: 30, isAvailable: true }
            ]
          }
        ]
      },
      {
        id: '1-2',
        name: 'Non-Veg Burgers',
        description: 'Juicy non-vegetarian burger options',
        items: [
          {
            id: '1-2-1',
            name: 'Chicken Burger',
            description: 'Grilled chicken patty with fresh vegetables and special sauce',
            price: 120,
            imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
            isAvailable: true,
            addOns: [
              { id: '1-2-1-1', name: 'Extra Cheese', price: 20, isAvailable: true },
              { id: '1-2-1-2', name: 'Extra Patty', price: 40, isAvailable: true },
              { id: '1-2-1-3', name: 'Bacon', price: 30, isAvailable: true }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Pizzas',
    description: 'Freshly baked pizzas with premium toppings',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
    subCategories: [
      {
        id: '2-1',
        name: 'Veg Pizzas',
        description: 'Vegetarian pizza options',
        items: [
          {
            id: '2-1-1',
            name: 'Margherita',
            description: 'Classic pizza with tomato sauce and mozzarella cheese',
            price: 150,
            imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
            isAvailable: true,
            addOns: [
              { id: '2-1-1-1', name: 'Extra Cheese', price: 30, isAvailable: true },
              { id: '2-1-1-2', name: 'Extra Toppings', price: 40, isAvailable: true }
            ]
          }
        ]
      }
    ]
  }
]; 