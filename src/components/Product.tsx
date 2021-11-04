import React from 'react';
import '../assets/scss/main.scss';
import defaultImage from '../assets/img/airelogo.jpeg';
import { Button } from './Button';

export interface IProduct {
    title: string;
    description: string;
    price: number;
    time: string;
    image?: string;
    id: string;
    quantity: number;
    center?: string,
}

export interface ProductProps extends IProduct{
    updatesummary: (product:any) => any;
}

export class Product extends React.Component<ProductProps,{}> {
    constructor(props: ProductProps) {
      super (props);
    }
  
    static defaultProps = {
      image : defaultImage,
    };

    public updateSummary = (quantity:number) => {
        var product = {
            title: this.props.title,
            price: this.props.price,
            time: this.props.time,
            id: this.props.id,
            quantity: quantity,
        }
        this.props.updatesummary(product);
    }
  
    public render() {
        const { title, description, price, time, image, ...props } = this.props;
        let quantity = this.props.quantity;
        const addProduct = () => {
            quantity += 1;
            this.setState({quantity: quantity});
            this.updateSummary(quantity);
        }
        const removeProduct = () => {
            if (quantity > 0) {
                quantity -= 1;
                this.setState({quantity: quantity});
                this.updateSummary(quantity);
            }
        }
      return (
        <div className={['card cardProduct', 'mx-1', 'my-1','px-0'].join(' ')} {...props}>
            <img src={ image } className="card-img-top cardImage" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text card-prod">{ description }</p>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <p className="card-text card-prod">{ time }'</p>                        
                    </div>
                    <div className="col-12 col-sm-6">
                        <p className="card-text card-prod float-end">{ price }€</p>  
                    </div>
                    <div className="col-4">
                        <Button buttonType="card" icon="minus" onClickButton={removeProduct}/>
                    </div>
                    <div className="col-4 text-center cardQuantity">
                        {this.props.quantity}
                    </div>
                    <div className="col-4">
                        <Button buttonType="card" icon="plus" onClickButton={addProduct}/>
                    </div>
                </div>
            </div>
        </div>
      );
    }  
}
export default Product;