import React from 'react';
import '../assets/scss/main.scss';
//import ProductList from '../containers/ProductList';
import ProductList from '../components/ProductList';
import { IProduct } from '../components/Product';
import { Filters } from './Filters';
import prod1Image from '../assets/img/prod1.jpeg';
import prod2Image from '../assets/img/prod2.jpeg';

interface IStep1Props {
    addedProducts: IProduct[];
    onClickNext: () => void;
}

interface IStep2State{
    filterProducts: IProduct[];
    filters: {
        time: string[];
        price: number | null;
        center: string;
    }
}

const prod1 = {
    title: 'Baño Termal Ancient y Masaje Relajante',
    description: 'Recorrido libre por distintas salas de agua. Incluye un masaje relajante de 30 min.',
    time: '120',
    price: 84,
    id: 'prod-1',
    image: prod1Image,
    center: 'Sevilla',
    quantity: 0
};
const prod2  = {
    id: 'prod-2',
    title: 'Experiencia Baño de Vino',
    time: '180',
    description: 'Baño de Vino con propiedades antioxidantes y masaje craneofacial y corporal.',
    price: 135,
    center: 'Sevilla',
    quantity: 0
};
const prod3  = {
    id: 'prod-3',
    title: 'Ritual del Agua',
    time: '120',
    description: 'Masaje que se realiza dentro del agua. Incluye recorrido termal.',
    price: 105,
    image: prod2Image,
    center: 'Barcelona',
    quantity: 0
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
                <ProductList productList={this.state.filterProducts} addedProducts={this.props.addedProducts} onClickNext={this.props.onClickNext}/>
            </div>
        );
    }
}
export default Step1;