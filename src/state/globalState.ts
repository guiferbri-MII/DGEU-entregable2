import { Status } from '../components/Wizard'
interface IGlobalState {
    steps: {
        title: string,
        status: Status;
        id: string
    }[],
    activeStep: string;
    addedProducts : {
        title: string,
        price: number,
        time: string,
        id: string,
        quantity: number
    }[];
    applyDiscount:boolean;
    discount:number;
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
    discount: 0
}