import { Action } from 'redux';

export enum ProductActions {
    ADD_PRODUCT = "ADD_PRODUCT"
}

export interface IProductAction extends Action {
    product: {
        title: string,
        price: number;
        time: string;
        id: string,
        quantity: number,
    }
}