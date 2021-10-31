import React from 'react';
import { Action, createStore } from 'redux';
import Header from './components/Header';
import Wizard from './containers/Wizard';
import Page from './containers/Page';
import IGlobalState, { initialState } from './state/globalState';
import { Provider } from 'react-redux';
import { IButtonAction } from './actions/ButtonActions'; //ToDo: 
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
      break;
  }
  return state;
}
const store = createStore(reducer, initialState);

class App extends React.Component{
  
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Wizard />
          <Page />
        </div>
      </Provider>
    );
  }
}

export default App;
