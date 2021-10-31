import { connect } from 'react-redux';
import Wizard from "../components/Wizard";
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({steps: state.steps, activeStep: state.activeStep});
}
export default connect(mapStateToProps)(Wizard);