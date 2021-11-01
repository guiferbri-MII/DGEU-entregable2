import React from 'react';
import { Action, createStore } from 'redux';
import Header from './components/Header';
import Wizard from './containers/Wizard';
import Page from './containers/Page';
import Summary from './containers/Summary';
import IGlobalState, { initialState } from './state/globalState';
import { Provider } from 'react-redux';
import { IButtonAction } from './actions/ButtonActions'; //ToDo: 
import { IProductAction } from './actions/ProductActions';
//import logo from './logo.svg';
//import './App.css';

const reducer = (state: IGlobalState = initialState, action: Action) => {
  switch (action.type) {
    case 'NEXT_STEP':
      const buttonAction = action as IButtonAction;
      var nextStep = buttonAction.nextStep;
      console.log('AQUI: ' + nextStep);
      let steps = state.steps;
      steps.forEach(function (step) {
        if (step.id == nextStep) {
          step.status = 'active';
        }
        if (step.id == buttonAction.currentStep) {
          step.status = 'complete';
        }
      });
      return {...state, activeStep: nextStep, steps: steps}
    case 'ADD_PRODUCT':
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
