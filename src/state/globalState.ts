import { Status } from '../components/Wizard'
import { IProduct } from '../components/Product';
import { DataForm } from '../components/MailForm';

interface IGlobalState {
    steps: {
        title: string,
        status: Status;
        id: string
    }[],
    activeStep: string;
    addedProducts: IProduct[];
    applyDiscount:boolean;
    discount:number;
    idChecked: string,
    dataForm: DataForm;
}
export default IGlobalState;

export const initialState: IGlobalState = {
    steps: [
        {title: 'Elige experiencia', status : Status.active, id: 'step-1'},
        {title: 'Método de envío', status : Status.disabled, id: 'step-2'},
        {title: 'Pago', status : Status.disabled, id: 'step-3'}
    ],
    activeStep: 'step-1',
    addedProducts: [],
    applyDiscount: false,
    discount: 0,
    idChecked: 'online',
    dataForm: {
        name: '',
        lastname: '',
        phone: '',
        email: '',
        address: '',
        postalCode: '',
        city: '',
        state: '',
        country: '',
        nameBuyer: '',
        lastnameBuyer: '',
        phoneBuyer: '',
        emailBuyer: '',
        termsCheck: '',
        privacityCheck: ''
    }
}