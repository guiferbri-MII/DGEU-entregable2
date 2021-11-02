import React from 'react';
import '../assets/scss/main.scss';
import defaultImage from '../assets/img/airelogo.jpeg';
import { Button } from './Button';

export interface ProductProps {
    title: string;
    description: string;
    price: number;
    time: string;
    image?: string;
    idprod: string;
    updatesummary: (product:any) => any;
}

interface IProductState {
    quantity: number;
}

export class Product extends React.Component<ProductProps,IProductState> {
    constructor(props: ProductProps) {
      super (props);
      this.state = {quantity: 0};
    }
  
    static defaultProps = {
      image : defaultImage
    };

    public updateSummary = (quantity:number) => {
        var product = {
            title: this.props.title,
            price: this.props.price,
            time: this.props.time,
            id: this.props.idprod,
            quantity: quantity,
        }
        this.props.updatesummary(product);
    }
  
    public render() {
        const { title, description, price, time, image, ...props } = this.props;
        let quantity = this.state.quantity;
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
        <div className={['card cardProduct', 'mx-1', 'my-1'].join(' ')} {...props}>
            <img src={ image } className="card-img-top cardImage" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text">{ description }</p>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <p className="card-text">{ time }'</p>                        
                    </div>
                    <div className="col-12 col-sm-6">
                        <p className="card-text float-end">{ price }€</p>  
                    </div>
                    <div className="col-4">
                        <Button buttonType="card" icon="minus" onClickButton={removeProduct}/>
                    </div>
                    <div className="col-4 text-center cardQuantity">
                        {this.state.quantity}
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