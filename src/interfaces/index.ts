import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface IReducer {
  products: IProduct[];
  loading: boolean;
}

export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProductCart extends IProduct {
  amount: number;
}
