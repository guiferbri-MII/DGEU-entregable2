interface IGlobalState {
    steps: {
        title: string,
        status: 'complete' | 'active' | 'disabled'; //ToDo poner como Enum el status
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
}
export default IGlobalState;

export const initialState: IGlobalState = {
    steps: [
        {title: 'Elige experiencia', status : 'active', id: 'step-1'},
        {title: 'Método de envío', status : 'disabled', id: 'step-2'},
        {title: 'Pago', status : 'disabled', id: 'step-3'}
    ],
    activeStep: 'step-1',
    addedProducts: []
}