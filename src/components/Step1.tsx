import React from 'react';
import '../assets/scss/main.scss';
import ProductList from '../containers/ProductList';
import { InfoProduct } from './ProductList';
import { Filters } from './Filters';
import prod1Image from '../assets/img/prod1.jpeg';

interface IStep1Props {
    onClickNext: () => void;
}

interface IStep2State{
    filterProducts: InfoProduct[];
    filters: {
        time: string[];
        price: number | null;
        center: string;
    }
}

const prod1 = {
    title: 'Baño Termal Ancient y Masaje Relajante',
    description: 'Un viaje de sensaciones en un edificio histórico y a la luz de las velas que consiste en un recorrido libre por distintas salas de agua a diferentes temperaturas. Incluye un masaje relajante de 30 min.',
    time: '120',
    price: 84,
    idprod: 'prod-1',
    image: prod1Image,
    center: 'Sevilla'
};
const prod2  = {
    idprod: 'prod-2',
    title: 'Experiencia Baño de Vino',
    time: '180',
    description: 'Acceso exclusivo durante 30 min. al Baño de Vino con propiedades antioxidantes, donde se aplica un masaje craneofacial y puedes degustar una copa de vino acompañado de nueces y queso. A continuación, un masaje corporal relajante de 45 min. Incluye recorrido termal.',
    price: 135,
    center: 'Sevilla'
};
const prod3  = {
    idprod: 'prod-3',
    title: 'Ritual del Agua',
    time: '120',
    description: 'Masaje de 30 min. que se realiza dentro del agua mientras te entregas a la incomparable sensación de flotar. Libera tensiones físicas y emocionales a través de la interacción con el agua y las milenarias técnicas Shiatsu. Incluye un zumo de frutas o una infusión relajante y recorrido termal.',
    price: 105,
    center: 'Barcelona'
};
const allProductsList = [prod1, prod2, prod3];
  
export class Step1 extends React.Component<IStep1Props,IStep2State> {
    constructor(props: IStep1Props) {
        super (props);
        this.state = {
            filterProducts: allProductsList,
            filters: {
                time: [],
                price: null,
                center: ''
            }
        };
    }

    public render() {
        const { ...props } = this.props;        

        const onFilterClick = (field:string, value: string) => {
            let filterProducts = allProductsList;
            let filters = this.state.filters;
            switch(field){
                case 'time':
                    let newFiltersTime:string[] = [];
                    if(value) {
                        let values = value.split(',');
                        filterProducts = filterProducts.filter(prod => values.includes(prod[field]));
                        newFiltersTime = values;
                    }
                    if (filters.center) {
                        filterProducts = filterProducts.filter(prod => prod['center'] == filters.center);
                    }
                    if (filters.price) {
                        filterProducts = filterProducts.filter(prod => prod['price'] == filters.price);
                    }
                    filters[field] = newFiltersTime;
                    break;
                case 'center':
                    let newFiltersCenter = '';
                    if(value) {
                        filterProducts = filterProducts.filter(prod => prod[field] == value);
                        newFiltersCenter = value;
                    }
                    if (filters.time.length > 0) {
                        filterProducts = filterProducts.filter(prod => filters.time.includes(prod['time']));
                    }
                    if (filters.price) {
                        filterProducts = filterProducts.filter(prod => prod['price'] == filters.price);
                    }
                    filters[field] = newFiltersCenter;
                    break;                    
                case 'price':
                    let newFiltersPrice = 0;
                    if (value) {
                        var valueNumber = parseInt(value, 10);
                        filterProducts = filterProducts.filter(prod => prod[field] == valueNumber);
                        newFiltersPrice = valueNumber;
                    }
                    if (filters.center) {
                        filterProducts = filterProducts.filter(prod => prod['center'] == filters.center);
                    }
                    if (filters.time.length > 0) {
                        filterProducts = filterProducts.filter(prod => filters.time.includes(prod['time']));
                    }
                    filters[field] = newFiltersPrice;
                    break;
            }
            this.setState({filterProducts: filterProducts, filters : filters});
        }

        return (
            <div className="container">
                <Filters onChangeFilter={onFilterClick}/>
                <ProductList productList={this.state.filterProducts}/>
            </div>
        );
    }
}
export default Step1;