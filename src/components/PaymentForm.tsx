import React from 'react';
import '../assets/scss/main.scss';
import { Button } from './Button';

interface PaymentFormProps {
}

export class PaymentForm extends React.Component<PaymentFormProps,{}> {
  constructor(props: PaymentFormProps) {
    super (props);
  }

  public render() {
    const { ...props } = this.props;
    return (
      <form>
        <div className="row form">
          <p className="mb-1 formHead">Pago</p>
            <div className="col-12">
              <label htmlFor="cardnumber" className="form-label">Número de la tarjeta</label>
              <input type="text" className="form-control" id="cardnumber" inputMode="numeric" pattern="[0-9\s]{13,19}" maxLength={19} placeholder="xxxx xxxx xxxx xxxx" />
            </div>
            <div className="col-12">
              <label htmlFor="lastname" className="form-label">Nombre y Apellidos</label>
              <input type="text" className="form-control" id="lastname" />
            </div>
            <div className="col-12">
              <label htmlFor="expirationDate" className="form-label">Fecha de Caducidad</label>
              <input type="text" className="form-control" id="expirationDate" pattern="[0-9]{2}\/[0-9]{2}" placeholder="_ _/_ _"/>
            </div>
            <div className="col-12">
              <label htmlFor="cvv" className="form-label">CVV</label>
              <input type="text" className="form-control" id="cvv" maxLength={3}/>
            </div>
            <div className="col-12">
              <label htmlFor="address" className="form-label">Dirección</label>
              <input type="text" className="form-control" id="address"/>
            </div>
            <div className="col-12 row justify-content-start mt-3">
              <div className="col-3">
                <input type="text" className="form-control" id="promotionalCode" placeholder="Código promocional"/>
              </div>
              <div className="col-3 align-self-center">
                <Button buttonType="form" label="APLICAR"/>
              </div>
            </div>
        </div>
        <div className="row justify-content-around mt-4">
          <div className="col-4">
              <Button buttonType="form" label="Cancelar"/>
          </div>
          <div className="col-4">
              <Button buttonType="form" label="Finalizar"/>
          </div>
        </div>
      </form>
    );
  }
}
