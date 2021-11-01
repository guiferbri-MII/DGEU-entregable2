import { connect } from 'react-redux';
import Page from "../components/Page";
import IGlobalState from '../state/globalState';
import { Dispatch } from 'redux';

const mapStateToProps = (state: IGlobalState) => {
    return ({activeStep: state.activeStep, addedProducts: state.addedProducts});
}
/*const mapDispatchToProps = (dispatch: Dispatch) => ({
    onClickNext: () => {
        console.log('HOLA');
        dispatch({type: 'NEXT_STEP', payload: 'step-2'});
    }
})*/
export default connect(mapStateToProps/*, mapDispatchToProps*/)(Page);