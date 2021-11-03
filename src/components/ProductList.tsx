import React from 'react';
import '../assets/scss/main.scss';
import Product from '../containers/Product';
import { IProduct } from '../components/Product';
import { Button } from './Button';

/*export interface Product {
    title: string;
    price: number;
    time: string;
    id: string,
    quantity: number
}*/

/*export interface InfoProduct extends ProductProps{
    //description: string;
    //image?: string,
    center: string
}*/

interface ProductListProps {
    addedProducts: IProduct[];
    productList: IProduct[];
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
        this.props.productList.map((product, i) => {
            var addedProd = this.props.addedProducts.filter(addedProd => addedProd.id == product.id);
            var quantity = addedProd.length > 0 ? addedProd[0].quantity : 0;
            product.quantity = quantity;
        });
        return (
        <div className="row justify-content-md-center">
            {this.props.productList.map((product, i) => (
                <Product id={product.id} key={product.id} title={product.title} description={product.description} price={product.price} time={product.time} image={product.image} quantity={product.quantity}/>
            ))}
            {
                this.props.addedProducts.length > 0 ? 
                <div className="text-center my-3">
                    <Button label="Siguiente" buttonType="form" onClickButton={validate}/>
                </div> : null
            }
        </div>
        );
    }
}
export default ProductList;