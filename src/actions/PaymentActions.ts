import { Action } from 'redux';

export enum PaymentActions {
    APPLY_DISCOUNT = "APPLY_DISCOUNT",
}

export interface IPaymentDiscountAction extends Action {
    discountCode:string;
}