import React from 'react';
import '../assets/scss/main.scss';
import { Button } from './Button';

export interface DataForm {
  name: string;
  lastname: string;
  phone: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;
  state: string;
  country: string;
  nameBuyer: string;
  lastnameBuyer: string;
  phoneBuyer: string;
  emailBuyer: string;
  termsCheck: string;
  privacityCheck: string;
}

interface MailFormProps {
  online: boolean;
  dataForm: DataForm;
  onClickCancel: () => any;
  onClickNext: (dataForm: DataForm, idChecked: string) => any;
}

interface MailFormState {
  dataForm: DataForm;
  [key: string]: any;
  errors: {
    [key: string]: string
  }
}

export class MailForm extends React.Component<MailFormProps,MailFormState> {
  constructor(props: MailFormProps) {
    super (props);
    this.state = {
      errors: {},
      dataForm: {
        name: this.props.dataForm.name,
        lastname: this.props.dataForm.lastname,
        phone: this.props.dataForm.phone,
        email: this.props.dataForm.email,
        address: this.props.dataForm.address,
        postalCode: this.props.dataForm.postalCode,
        city: this.props.dataForm.city,
        state: this.props.dataForm.state,
        country: this.props.dataForm.country,
        nameBuyer: this.props.dataForm.nameBuyer,
        lastnameBuyer: this.props.dataForm.lastnameBuyer,
        phoneBuyer: this.props.dataForm.phoneBuyer,
        emailBuyer: this.props.dataForm.emailBuyer,
        termsCheck: this.props.dataForm.termsCheck,
        privacityCheck: this.props.dataForm.privacityCheck
      }
    }
  }

  static defaultProps = {
    online : true,
  };

  public render() {
    const { online, ...props } = this.props;
    let errors = this.state.errors;
    let dataForm = this.state.dataForm;
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
      },
      privacityCheck: {
        check: {
          message: "Debe marcar la casilla de Política de Privacidad"
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
        this.props.onClickNext(this.state.dataForm, this.props.online ? 'online' : 'postal');
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
      let key = name as keyof DataForm;
      if(type == "checkbox") {
        //CHECK
        const check = validation?.check;
        let checked = event.target.checked;
        if (!checked) {
          valid = false;
          errors[name] = check.message;
        }
        dataForm[key]= String(checked);
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
        dataForm[key]= value;
      }
      this.setState({
          ...this.state,
          errors: errors, [name]: valid, dataForm: dataForm
      });
    }
    return (
      <form>
        <div className="row form">
          <p className="mb-1 formHead">Datos del destinatario</p>
          <div className="row row-cols-2">
            <div className="col">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input type="text" className={[errors.name?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="name" value={this.state.dataForm.name} onChange={changeValue} onBlur={changeValue}/>
              {errors.name?.length > 0 && <span className="invalid-feedback">{errors.name}</span>}
            </div>
            <div className="col">
              <label htmlFor="lastname" className="form-label">Apellidos</label>
              <input type="text" className={[errors.lastname?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="lastname" value={this.state.dataForm.lastname} onChange={changeValue} onBlur={changeValue}/>
              {errors.lastname?.length > 0 && <span className="invalid-feedback">{errors.lastname}</span>}
            </div>
            <div className="col">
              <label htmlFor="phone" className="form-label">Teléfono</label>
              <input type="tel" className={[errors.phone?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} pattern="[6-9]{2}[0-9]{7}" id="phone" value={this.state.dataForm.phone} onChange={changeValue} onBlur={changeValue}/>
              {errors.phone?.length > 0 && <span className="invalid-feedback">{errors.phone}</span>}
            </div>
            <div className="col">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className={[errors.email?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="email" value={this.state.dataForm.email} onChange={changeValue} onBlur={changeValue}/>
              {errors.email?.length > 0 && <span className="invalid-feedback">{errors.email}</span>}
            </div>
            {
                online ? null : 
                <div className="col-12">
                  <label htmlFor="address" className="form-label">Dirección</label>
                  <input type="text" className={[errors.address?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="address" value={this.state.dataForm.address} onChange={changeValue} onBlur={changeValue}/>
                  {errors.address?.length > 0 && <span className="invalid-feedback">{errors.address}</span>}
                </div>
            }
            {
                online ? null : 
                <div className="col">
                  <label htmlFor="postalCode" className="form-label">Código Postal</label>
                  <input type="text" className={[errors.postalCode?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="postalCode" value={this.state.dataForm.postalCode} onChange={changeValue} onBlur={changeValue}/>
                  {errors.postalCode?.length > 0 && <span className="invalid-feedback">{errors.postalCode}</span>}
                </div>
            }
            {
                online ? null : 
                <div className="col">
                  <label htmlFor="city" className="form-label">Ciudad</label>
                  <input type="text" className={[errors.city?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="city" value={this.state.dataForm.city} onChange={changeValue} onBlur={changeValue}/>
                  {errors.city?.length > 0 && <span className="invalid-feedback">{errors.city}</span>}
                </div>
            }
            {
                online ? null : 
                <div className="col">
                  <label htmlFor="state" className="form-label">Provincia</label>
                  <input type="text" className={[errors.state?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="state" value={this.state.dataForm.state} onChange={changeValue} onBlur={changeValue}/>
                  {errors.state?.length > 0 && <span className="invalid-feedback">{errors.state}</span>}
                </div>
            }
            {
                online ? null : 
                <div className="col">
                  <label htmlFor="country" className="form-label">País</label>
                  <input type="text" className={[errors.country?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="country" value={this.state.dataForm.country} onChange={changeValue} onBlur={changeValue}/>
                  {errors.country?.length > 0 && <span className="invalid-feedback">{errors.country}</span>}
                </div>
            }
          </div>
          <p className="mt-3 mb-1 formHead">Datos del comprador</p>
          <div className="row row-cols-2">
            <div className="col">
              <label htmlFor="nameBuyer" className="form-label">Nombre</label>
              <input type="text" className={[errors.nameBuyer?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="nameBuyer" value={this.state.dataForm.nameBuyer} onChange={changeValue} onBlur={changeValue}/>
              {errors.nameBuyer?.length > 0 && <span className="invalid-feedback">{errors.nameBuyer}</span>}
            </div>
            <div className="col">
              <label htmlFor="lastnameBuyer" className="form-label">Apellidos</label>
              <input type="text" className={[errors.lastnameBuyer?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="lastnameBuyer" value={this.state.dataForm.lastnameBuyer} onChange={changeValue} onBlur={changeValue}/>
              {errors.lastnameBuyer?.length > 0 && <span className="invalid-feedback">{errors.lastnameBuyer}</span>}
            </div>
            <div className="col">
              <label htmlFor="phoneBuyer" className="form-label">Teléfono</label>
              <input type="tel" className={[errors.phoneBuyer?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="phoneBuyer" value={this.state.dataForm.phoneBuyer} onChange={changeValue} onBlur={changeValue}/>
              {errors.phoneBuyer?.length > 0 && <span className="invalid-feedback">{errors.phoneBuyer}</span>}
            </div>
            <div className="col">
              <label htmlFor="emailBuyer" className="form-label">Email</label>
              <input type="email" className={[errors.emailBuyer?.length > 0 ? 'is-invalid' : '',"form-control"].join(' ')} id="emailBuyer" value={this.state.dataForm.emailBuyer} onChange={changeValue} onBlur={changeValue}/>
              {errors.emailBuyer?.length > 0 && <span className="invalid-feedback">{errors.emailBuyer}</span>}
            </div>
          </div>
          <div className="row">
            <div className="col-12 my-1">
              <input type="checkbox" className={[errors.termsCheck?.length > 0 ? 'is-invalid' : '',"form-check-input","me-1"].join(' ')} id="termsCheck" checked={this.state.dataForm.termsCheck === 'true'} onChange={changeValue}/>
              <label className="form-check-label" htmlFor="termsCheck">Confirmo que he leído los Términos y Condiciones.</label>
              {errors.termsCheck?.length > 0 && <span className="invalid-feedback">{errors.termsCheck}</span>}
            </div>
            <div className="col-12 my-1">
              <input type="checkbox" className={[errors.privacityCheck?.length > 0 ? 'is-invalid' : '',"form-check-input","me-1"].join(' ')} id="privacityCheck" checked={this.state.dataForm.privacityCheck === 'true'} onChange={changeValue}/>
              <label className="form-check-label" htmlFor="privacityCheck">Confirmo que he leído la Política de Privacidad.</label>
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
export default MailForm;