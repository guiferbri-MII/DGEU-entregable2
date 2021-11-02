import { Action } from 'redux';

export enum ButtonActions {
    BACK_STEP = "BACK_STEP",
    NEXT_STEP = "NEXT_STEP"
}

export interface IButtonAction extends Action {
    currentStep: string;
    nextStep: string;
}