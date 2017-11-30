import Counter from '../components/Counter';
import { CounterProps } from '../components/Counter';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ counter }: StoreState): CounterProps {
  return {
    counter
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>): CounterProps {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
//    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);