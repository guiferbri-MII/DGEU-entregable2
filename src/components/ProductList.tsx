import React from 'react';
import '../assets/scss/main.scss';
import Product from '../containers/Product';
import { Button } from './Button';

export interface InfoProduct {
    title: string;
    description: string;
    price: number;
    time: string;
    idprod: string,
    image?: string,
    center: string
}

interface ProductListProps {
    addedProducts: {
        title: string;
        price: number;
        time: string;
        id: string,
        quantity: number
    }[];
    productList: InfoProduct[];
    onClickNext: () => any;
}
  
export class ProductList extends React.Component<ProductListProps,{}> {
    constructor(props: ProductListProps) {
        super (props);
    }

    public render() {
        const { ...props } = this.props;

        const validate = () => {
            if (this.props.addedProducts.length > 0) {
                this.props.onClickNext();
            }
        }

        return (
        <div className="row justify-content-md-center">
            {this.props.productList.map((product, i) => (
                <Product idprod={product.idprod} key={product.idprod} title={product.title} description={product.description} price={product.price} time={product.time} image={product.image}/>
            ))}
            {
                this.props.addedProducts.length > 0 ? 
                <div className="text-center">
                    <Button label="Siguiente" buttonType="form" onClickButton={validate}/>
                </div> : null
            }
        </div>
        );
    }
}
export default ProductList;