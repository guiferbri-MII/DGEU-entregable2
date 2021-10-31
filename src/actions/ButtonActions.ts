import { Action } from 'redux';

export interface IButtonAction extends Action {
    currentStep: string;
    nextStep: string;
}