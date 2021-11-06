import { connect } from 'react-redux';
import Page from "../components/Page";
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({activeStep: state.activeStep});
}
export default connect(mapStateToProps)(Page);