export type Grade = 'A' | 'B' | 'C';

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  pricePerM3: number;
  dimensions: {
    thickness: number; // mm
    width: number;    // mm
    length: number;   // mm
  };
  image: string;
  badges: string[];
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  weightPerM3: number; // kg/m3, default 550
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
}
