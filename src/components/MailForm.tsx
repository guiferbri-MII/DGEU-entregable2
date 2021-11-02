import React from 'react';
import '../assets/scss/main.scss';
import { Button } from './Button';

interface MailFormProps {
  online: boolean;
  onClickCancel: () => any;
  onClickNext: () => any;
}

interface MailFormState {
  [key: string]: any;
  errors: {
    [key: string]: string
  }
}

export class MailForm extends React.Component<MailFormProps,MailFormState> {
  constructor(props: MailFormProps) {
    super (props);
    this.state = {
      errors: {}
    }
  }

  static defaultProps = {
    online : true,
  };

  public render() {
    const { online, ...props } = this.props;
    let errors = this.state.errors;
    const inputsID = ['name','lastname','phone','email','nameBuyer','lastnameBuyer','phoneBuyer','emailBuyer','termsCheck','privacityCheck'];
    if(!online) {
      inputsID.push('address','postalCode','city','state','country')
    }

    const validations:any = {
      /*name: {
        pattern: {
          value: '^[A-Za-z]*$',
          message: "Nombre inválido",
        }
      },
      lastname: {
        pattern: {
          value: '^[A-Za-z]*$',
          message: "Apellido inválido",
        }
      },*/
      phone: {
        pattern: {
          value: '^[6-9]{1}[0-9]{8}$',
          message: "Teléfono inválido",
        }
      },
      phoneBuyer: {
        pattern: {
          value: '^[6-9]{1}[0-9]{8}$',
          message: "Teléfono inválido",
        }
      },
      email: {
        pattern: {
          value: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
          message: "Email inválido",
        }
      },
      emailBuyer:{
        pattern: {
          value: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
          message: "Email inválido",
        }
      },
      postalCode: {
        pattern: {
          value: '^[0-9]{5}$',
          message: "Código postal inválido",
        }
      },
      termsCheck: {
        check: {
          message: "Debe marcar la casilla de Términos y Condiciones"
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
        this.props.onClickNext();
      } else {
        this.setState({
            ...this.state,
            errors: errors
        });
      }
    }

    const changeValue = (event:React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const name = event.target.id;
      const type = event.target.type;
      let valid = true;
      const validation = validations[name];
      
      errors[name] = '';
      valid = true;
      if(type == "checkbox") {
        //CHECK
        const check = validation?.check;
        if (!event.target.checked) {
          valid = false;
          errors[name] = check.message;
        }
      } else {  
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
      }
      this.setState({
          ...this.state,
          errors: errors, [name]: valid
      });
    }
    return (
      <form>
        <div className="row form">
          <p className="mb-1 formHead">Datos del destinatario</p>
          <div className="row row-cols-2">
            <div className="col">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input type="text" className={[errors.name?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="name" onChange={changeValue} onBlur={changeValue}/>
              {errors.name?.length > 0 && <span className="invalid-feedback">{errors.name}</span>}
            </div>
            <div className="col">
              <label htmlFor="lastname" className="form-label">Apellidos</label>
              <input type="text" className={[errors.lastname?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="lastname" onChange={changeValue} onBlur={changeValue}/>
              {errors.lastname?.length > 0 && <span className="invalid-feedback">{errors.lastname}</span>}
            </div>
            <div className="col">
              <label htmlFor="phone" className="form-label">Teléfono</label>
              <input type="tel" className={[errors.phone?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} pattern="[6-9]{2}[0-9]{7}" id="phone" onChange={changeValue} onBlur={changeValue}/>
              {errors.phone?.length > 0 && <span className="invalid-feedback">{errors.phone}</span>}
            </div>
            <div className="col">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className={[errors.email?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="email" onChange={changeValue} onBlur={changeValue}/>
              {errors.email?.length > 0 && <span className="invalid-feedback">{errors.email}</span>}
            </div>
            {
                online ? null : 
                <div className="col-12">
                  <label htmlFor="address" className="form-label">Dirección</label>
                  <input type="text" className={[errors.address?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="address" onChange={changeValue} onBlur={changeValue}/>
                  {errors.address?.length > 0 && <span className="invalid-feedback">{errors.address}</span>}
                </div>
            }
            {
                online ? null : 
                <div className="col">
                  <label htmlFor="postalCode" className="form-label">Código Postal</label>
                  <input type="text" className={[errors.postalCode?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="postalCode" onChange={changeValue} onBlur={changeValue}/>
                  {errors.postalCode?.length > 0 && <span className="invalid-feedback">{errors.postalCode}</span>}
                </div>
            }
            {
                online ? null : 
                <div className="col">
                  <label htmlFor="city" className="form-label">Ciudad</label>
                  <input type="text" className={[errors.city?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="city" onChange={changeValue} onBlur={changeValue}/>
                  {errors.city?.length > 0 && <span className="invalid-feedback">{errors.city}</span>}
                </div>
            }
            {
                online ? null : 
                <div className="col">
                  <label htmlFor="state" className="form-label">Provincia</label>
                  <input type="text" className={[errors.state?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="state" onChange={changeValue} onBlur={changeValue}/>
                  {errors.state?.length > 0 && <span className="invalid-feedback">{errors.state}</span>}
                </div>
            }
            {
                online ? null : 
                <div className="col">
                  <label htmlFor="country" className="form-label">País</label>
                  <input type="text" className={[errors.country?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="country" onChange={changeValue} onBlur={changeValue}/>
                  {errors.country?.length > 0 && <span className="invalid-feedback">{errors.country}</span>}
                </div>
            }
          </div>
          <p className="mt-3 mb-1 formHead">Datos del comprador</p>
          <div className="row row-cols-2">
            <div className="col">
              <label htmlFor="nameBuyer" className="form-label">Nombre</label>
              <input type="text" className={[errors.nameBuyer?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="nameBuyer" onChange={changeValue} onBlur={changeValue}/>
              {errors.nameBuyer?.length > 0 && <span className="invalid-feedback">{errors.nameBuyer}</span>}
            </div>
            <div className="col">
              <label htmlFor="lastnameBuyer" className="form-label">Apellidos</label>
              <input type="text" className={[errors.lastnameBuyer?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="lastnameBuyer" onChange={changeValue} onBlur={changeValue}/>
              {errors.lastnameBuyer?.length > 0 && <span className="invalid-feedback">{errors.lastnameBuyer}</span>}
            </div>
            <div className="col">
              <label htmlFor="phoneBuyer" className="form-label">Teléfono</label>
              <input type="tel" className={[errors.phoneBuyer?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="phoneBuyer" onChange={changeValue} onBlur={changeValue}/>
              {errors.phoneBuyer?.length > 0 && <span className="invalid-feedback">{errors.phoneBuyer}</span>}
            </div>
            <div className="col">
              <label htmlFor="emailBuyer" className="form-label">Email</label>
              <input type="email" className={[errors.emailBuyer?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="emailBuyer" onChange={changeValue} onBlur={changeValue}/>
              {errors.emailBuyer?.length > 0 && <span className="invalid-feedback">{errors.emailBuyer}</span>}
            </div>
          </div>
          <div className="row">
            <div className="col-12 my-1">
              <input type="checkbox" className={[errors.termsCheck?.length > 0 ? 'is-invalid' : '',"form-check-input","me-1"].join(' ')} id="termsCheck" onChange={changeValue}/>
              <label className="form-check-label" htmlFor="termsCheck">Confirmo que he leído los términos y condiciones.</label>
              {errors.termsCheck?.length > 0 && <span className="invalid-feedback">{errors.termsCheck}</span>}
            </div>
            <div className="col-12 my-1">
              <input type="checkbox" className={[errors.privacityCheck?.length > 0 ? 'is-invalid' : '',"form-check-input","me-1"].join(' ')} id="privacityCheck" onChange={changeValue}/>
              <label className="form-check-label" htmlFor="privacityCheck">Confirmo que he leído la política de privacidad.</label>
              {errors.privacityCheck?.length > 0 && <span className="invalid-feedback">{errors.privacityCheck}</span>}
            </div>
          </div>
        </div>
        <div className="row justify-content-around mt-3">
          <div className="col-1">
              <Button buttonType="form" label="Atrás" onClickButton={this.props.onClickCancel}/>
          </div>
          <div className="col-1">
              <Button buttonType="form" label="Siguiente" onClickButton={validate}/>
          </div>
        </div>
      </form>
    );
  }
}
