import { Action } from 'redux';
import { DataForm } from '../components/MailForm';

export enum MailFormActions {
    MAILFORM_FILLED = "MAILFORM_FILLED",
    MAILFORM_CANCEL = "MAILFORM_CANCEL"
}

export interface IMailFormActionsAction extends Action {
    currentStep: string;
    nextStep: string;
    dataForm: DataForm;
    idChecked: string;
}