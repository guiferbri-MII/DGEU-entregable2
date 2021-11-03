import { Action } from 'redux';
import { IProduct } from '../components/Product';

export enum ProductActions {
    ADD_PRODUCT = "ADD_PRODUCT"
}

export interface IProductAction extends Action {
    product: IProduct
}