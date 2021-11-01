import React from 'react';
import '../assets/scss/main.scss';
import Product from '../containers/Product';
import { Button } from './Button';

interface ProductListProps {
    addedProducts: {
        title: string;
        price: number;
        time: string;
        id: string,
        quantity: number
    }[];
    onClickNext: () => any;
}
  
export class ProductList extends React.Component<ProductListProps,{}> {
    constructor(props: ProductListProps) {
        super (props);
    }

    public render() {
        const { ...props } = this.props;

        const validate = () => {
            console.log('validate'); //ToDo comprobar que se han añadido prods, si hay..llamar a onclicknext
            if (this.props.addedProducts.length > 0) {
                this.props.onClickNext();
            } else {
                //ToDo: Mostrar error
            }
            console.log(JSON.stringify(this.props.addedProducts)); //ToDo: borrar
        }

        return (
        <div className="row justify-content-md-center">
            <Product idProd="prod-1" title="Producto 1" description="Descripcion producto 1" price={120} time="30" />
            <Product idProd="prod-2" title="Producto 2" description="Descripcion producto 2" price={60} time="15" />
            <Product idProd="prod-3" title="Producto 3" description="Descripcion producto 3" price={180} time="90" />
            <div className="text-center">
                <Button label="Siguiente" buttonType="form" onClickButton={validate}/>
            </div>
        </div>
        );
    }
}
export default ProductList;