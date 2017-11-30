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

export function mapDispatchToProps(dispatch: Dispatch<actions.Action>): CounterProps {
  return {
    onIncrement: () => dispatch(actions.incrementStarted()),
    onCancel: () => dispatch(actions.incrementCanceled())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);