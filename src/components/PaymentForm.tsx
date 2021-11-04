import React from 'react';
import '../assets/scss/main.scss';
import { Button } from './Button';

interface PaymentFormProps {
  onClickCancel: () => any;
  onClickFinish: () => any;
  applyDiscount: (discountCode:string) => any;
}

interface PaymentFormState {
  [key: string]: any;
  errors: {
    [key: string]: string
  }
}

export class PaymentForm extends React.Component<PaymentFormProps,PaymentFormState> {
  constructor(props: PaymentFormProps) {
    super (props);
    this.state = {
      errors: {}
    }
  }

  public applyButton = () => {
    var promotionalCodeElement = document.getElementById('promotionalCode') as HTMLInputElement;
    var promotionalCode = promotionalCodeElement.value;
    if (promotionalCode) {
      this.props.applyDiscount(promotionalCode);
    }
  }

  public render() {
    const { ...props } = this.props;
    let errors = this.state.errors;
    const inputsID = ['cardnumber','expirationDate','cvv','lastname','address'];

    const validations:any = {
      cardnumber: {
        pattern: {
          value: '(^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$)|(^3[47][0-9]{13}$)|(^4[0-9]{12}(?:[0-9]{3})?$)',
          message: "Número de tarjeta inválido",
        }
      },
      cvv: {
        pattern: {
          value: '^[0-9]{3}$',
          message: "Código de seguridad inválido",
        }
      },
      expirationDate:{
        date: {
          value: '^[0-9]{2}\/[0-9]{2}$',
          isValid: (value:string) => {
            var splitDate = value.split('/');
            var month = parseInt(splitDate[0]);
            var year = parseInt('20'+splitDate[1]);
            const currentYear = new Date().getFullYear();
            const currentMonth = new Date().getMonth() + 1;
            var isValid = true;
            if (year < currentYear || (year == currentYear && month < currentMonth)) {
              isValid = false;
            }
            return isValid;
          },
          message: "Fecha de caducidad inválida",
        }
      }
    }

    const validate = () => {
      let valid = true;
      for (var index in inputsID) {
        var id = inputsID[index];
        if (!this.state[id]) {
          valid = false;
          if (!this.state.errors[id]) {
            errors[id] = 'Este campo es obligatorio';
          }
        }
      }
      if (valid) {
        this.props.onClickFinish();
      } else {
        this.setState({
            ...this.state,
            errors: errors
        });
      }
    }

    const changeExpirationDate = (event:React.KeyboardEvent<HTMLInputElement>) => {
      var code = event.key;
      var allowedKeys = [8];
      if (allowedKeys.indexOf(parseInt(code)) !== -1) {
        return;
      }
      var expirationDateElement = document.getElementById('expirationDate');
      var element = expirationDateElement as HTMLInputElement;
      element.value = element.value.replace(/^([1-9]\/|[2-9])$/g, '0$1/')
      .replace(/^(0[1-9]|1[0-2])$/g, '$1/').replace(/^([0-1])([3-9])$/g, '0$1/$2')
      .replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2')
      .replace(/^([0]+)\/|[0]+$/g, '0')
      .replace(/[^\d\/]|^[\/]*$/g, '')
      .replace(/\/\//g, '/');
      const name = "expirationDate";
      const validation = validations[name];
      let valid = validation.date.isValid(element.value);
      console.log(valid);
      if (RegExp(validation.date.value).test(element.value) && !valid) {
        errors[name] = validation.date.message;
      } else {
        errors[name] = '';
        valid = true;
      }
      this.setState({
        ...this.state,
        errors: errors, [name]: valid
      });
      
    }

    const changeValue = (event:React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const name = event.target.id;
      let valid = true;
      const validation = validations[name];

      errors[name] = '';
      valid = true;
      //OBLIGATORIO
      if(!value) {
        valid = false;
        errors[name] = 'Este campo es obligatorio';
      }     
      //PATRON
      const pattern = validation?.pattern;
      if (pattern?.value && !RegExp(pattern.value).test(value)) {
        valid = false;
        errors[name] = pattern.message;
      }
      
      this.setState({
          ...this.state,
          errors: errors, [name]: valid
      });
    }

    return (
      <form>
        <div className="row form">
          <p className="mb-1 formHead">Pago</p>
            <div className="col-6">
              <label htmlFor="cardnumber" className="form-label">Número de la tarjeta</label>
              <input type="text" className={[errors.cardnumber?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="cardnumber" onChange={changeValue} onBlur={changeValue} inputMode="numeric" pattern="[0-9\s]{13,19}" maxLength={19} />
              {errors.cardnumber?.length > 0 && <span className="invalid-feedback">{errors.cardnumber}</span>}
            </div>
            <div className="col-6">
              <label htmlFor="expirationDate" className="form-label">Fecha de Caducidad</label>
              <input type="text" className={[errors.expirationDate?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="expirationDate" onKeyUp={changeExpirationDate} pattern="[0-9]{2}\/[0-9]{2}" placeholder="_ _/_ _"/>
              {errors.expirationDate?.length > 0 && <span className="invalid-feedback">{errors.expirationDate}</span>}
            </div>
            <div className="col-3">
              <label htmlFor="cvv" className="form-label">CVV</label>
              <input type="text" className={[errors.cvv?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="cvv" onChange={changeValue} onBlur={changeValue} maxLength={3}/>
              {errors.cvv?.length > 0 && <span className="invalid-feedback">{errors.cvv}</span>}
            </div>
            <div className="w-100"></div>
            <div className="col-12">
              <label htmlFor="lastname" className="form-label">Nombre y Apellidos</label>
              <input type="text" className={[errors.lastname?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} onChange={changeValue} onBlur={changeValue} id="lastname" />
              {errors.lastname?.length > 0 && <span className="invalid-feedback">{errors.lastname}</span>}
            </div>
            <div className="col-12">
              <label htmlFor="address" className="form-label">Dirección</label>
              <input type="text" className={[errors.address?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} onChange={changeValue} onBlur={changeValue} id="address"/>
              {errors.address?.length > 0 && <span className="invalid-feedback">{errors.address}</span>}
            </div>
            <div className="col-12 row justify-content-start mt-3">
              <div className="col-3">
                <input type="text" className="form-control" id="promotionalCode" placeholder="Código promocional"/>
              </div>
              <div className="col-3 align-self-center">
                <Button buttonType="form" label="APLICAR" onClickButton={this.applyButton}/>
              </div>
            </div>
        </div>
        <div className="row justify-content-around mt-3">
          <div className="col-1">
              <Button buttonType="form" label="Atrás" onClickButton={this.props.onClickCancel}/>
          </div>
          <div className="col-1">
              <Button buttonType="form" label="Finalizar" onClickButton={validate}/>
          </div>
        </div>
      </form>
    );
  }
}
export default PaymentForm;