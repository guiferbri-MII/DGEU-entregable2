import { Action } from 'redux';

export interface IProductAction extends Action {
    product: {
        title: string,
        price: number;
        time: string;
        id: string,
        quantity: number,
    };
    add: boolean;
}