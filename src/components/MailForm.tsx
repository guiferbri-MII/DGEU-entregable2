import React from 'react';
import '../assets/scss/main.scss';
import { Button } from './Button';

interface MailFormProps {
  online: boolean;
}

export class MailForm extends React.Component<MailFormProps,{}> {
  constructor(props: MailFormProps) {
    super (props);
  }

  static defaultProps = {
    online : true,
  };

  public cancelButton = () => {
    console.log('cancelar');
  } 

  public nextButton = () => {

  }

  public render() {
    const { online, ...props } = this.props;
    return (
      <form>
        <div className="row form">
          <p className="mb-1 formHead">Datos del destinatario</p>
          <div className="row row-cols-2">
            <div className="col">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="col">
              <label htmlFor="lastname" className="form-label">Apellidos</label>
              <input type="text" className="form-control" id="lastname" />
            </div>
            <div className="col">
              <label htmlFor="phone" className="form-label">Teléfono</label>
              <input type="tel" className="form-control" id="phone" />
            </div>
            <div className="col">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            {
                online ? null : 
                <div className="col-12">
                  <label htmlFor="address" className="form-label">Dirección</label>
                  <input type="text" className="form-control" id="address" />
                </div>
            }
            {
                online ? null : 
                <div className="col">
                  <label htmlFor="postalCode" className="form-label">Código Postal</label>
                  <input type="text" className="form-control" id="postalCode" />
                </div>
            }
            {
                online ? null : 
                <div className="col">
                  <label htmlFor="city" className="form-label">Ciudad</label>
                  <input type="text" className="form-control" id="city" />
                </div>
            }
            {
                online ? null : 
                <div className="col">
                  <label htmlFor="state" className="form-label">Provincia</label>
                  <input type="text" className="form-control" id="state" />
                </div>
            }
            {
                online ? null : 
                <div className="col">
                  <label htmlFor="country" className="form-label">País</label>
                  <input type="text" className="form-control" id="country" />
                </div>
            }
          </div>
          <p className="mt-3 mb-1 formHead">Datos del comprador</p>
          <div className="row row-cols-2">
            <div className="col">
              <label htmlFor="nameBuyer" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nameBuyer" />
            </div>
            <div className="col">
              <label htmlFor="lastnameBuyer" className="form-label">Apellidos</label>
              <input type="text" className="form-control" id="lastnameBuyer" />
            </div>
            <div className="col">
              <label htmlFor="phoneBuyer" className="form-label">Teléfono</label>
              <input type="tel" className="form-control" id="phoneBuyer" />
            </div>
            <div className="col">
              <label htmlFor="emailBuyer" className="form-label">Email</label>
              <input type="email" className="form-control" id="emailBuyer" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 my-1">
              <input type="checkbox" className="form-check-input me-1" id="termsCheck" />
              <label className="form-check-label" htmlFor="termsCheck">Confirmo que he leído los términos y condiciones</label>
            </div>
            <div className="col-12 my-1">
              <input type="checkbox" className="form-check-input me-1" id="termsCheck" />
              <label className="form-check-label" htmlFor="termsCheck">Confirmo que he leído la política de privacidad</label>
            </div>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-4">
              <Button buttonType="form" label="Cancelar" onClickButton={this.cancelButton}/>
          </div>
          <div className="col-4">
              <Button buttonType="form" label="Siguiente" onClickButton={this.nextButton}/>
          </div>
        </div>
      </form>
    );
  }
}
