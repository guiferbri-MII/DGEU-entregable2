import React from 'react';
import { Action, createStore } from 'redux';
import Header from './components/Header';
import Wizard from './containers/Wizard';
import Page from './containers/Page';
import Summary from './containers/Summary';
import IGlobalState, { initialState } from './state/globalState';
import { Provider } from 'react-redux';
import { IButtonAction, ButtonActions } from './actions/ButtonActions';
import { IProductAction, ProductActions } from './actions/ProductActions';
import { IPaymentDiscountAction, PaymentActions } from './actions/PaymentActions';
import { Status } from './components/Wizard';
//import logo from './logo.svg';
//import './App.css';

const reducer = (state: IGlobalState = initialState, action: Action) => {
  let steps = state.steps;
  switch (action.type) {
    case ButtonActions.NEXT_STEP:
      const buttonAction = action as IButtonAction;
      var nextStep = buttonAction.nextStep;
      steps.forEach(function (step) {
        if (step.id == nextStep) {
          step.status = Status.active;
        }
        if (step.id == buttonAction.currentStep) {
          step.status = Status.complete;
        }
      });
      return {...state, activeStep: nextStep, steps: steps}
    case ButtonActions.BACK_STEP:
      const buttonActionBack = action as IButtonAction;
      var nextStep = buttonActionBack.nextStep;
      steps.forEach(function (step) {
        if (step.id == nextStep) {
          step.status = Status.active;
        }
        if (step.id == buttonActionBack.currentStep) {
          step.status = Status.disabled;
        }
      }); //ToDo: Mantener lo que habia en el paso
      return {...state, activeStep: nextStep, steps: steps}
    case ProductActions.ADD_PRODUCT:
      const productAction = action as IProductAction;
      let products = state.addedProducts;
      let currentProd = productAction.product;
      var index = products.findIndex(prod => prod.id==currentProd.id);
      if (index === -1) {
        products.push(currentProd);
      } else {
        products.forEach(function (prod) {
          if (prod.id == currentProd.id) {
            prod.quantity = currentProd.quantity;
          }
        });
      }
      products = products.filter(prod => prod.quantity > 0);
      return {...state, addedProducts: products}
    case PaymentActions.APPLY_DISCOUNT:
      const paymentAction = action as IPaymentDiscountAction;
      var discount = 0;
      var applyDiscount = false;
      switch(paymentAction.discountCode){
        case "AIRE50":
          discount = 50;
          applyDiscount = true;
          break;
        case "AIRE15":
          discount = 15;
          applyDiscount = true;
          break;
        case "AIRE25":
          discount = 25;
          applyDiscount = true;
          break;
      }
      return {...state, applyDiscount: applyDiscount, discount:discount}

  }
  return state;
}
const store = createStore(reducer, initialState);

class App extends React.Component{
  
  public render() {
    return (
      <Provider store={store}>
        <div className="App container-fluid">
          <div className="row">
            <Header />
          </div>
          <Wizard />
          <div className="row">
            <div className="col-9">
              <Page />
            </div>
            <div className="col-3">
              <Summary />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
